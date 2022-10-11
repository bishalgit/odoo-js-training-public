/** @odoo-module **/

import { registry } from '@web/core/registry';
import { FormController } from "@web/views/form/form_controller";
import { formView } from '@web/views/form/form_view';
import { useService } from "@web/core/utils/hooks";
import { useDebounced } from "@web/core/utils/timing";

export class CustomFormController extends FormController {
    async setup() {
        super.setup();
        this.orm = useService('orm');
        this.actionService = useService("action");
        this.notification = useService("notification");
        // const onPrint = debounce(this.onPrint.bind(this), 20);
        // this.onPrint = onPrint;
        // onDestroyed(() => {
        //     onPrint.cancel();
        // });
        this.debouncedPrintLabel = useDebounced(this.onPrint, 200);
    }

    async onPrint(ev) {
        const result = this.orm.call(this.model.root.resModel, "print_label", [this.model.root.resId]);
        
        if (result) {
            this.notification.add(this.env._t("Label successfully printed"), {
                type: "success",
            });
        } else {
            this.notification.add(this.env._t("Could not print the label"), {
                type: "danger",
                sticky: true,
            });
        }
    }

    get isPrintBtnPrimary() {
        return (
            this.model.root.data &&
            this.model.root.data.customer_id &&
            this.model.root.data.state === "printed"
        );
    }
};

CustomFormController.template = 'awesome_tshirt.CustomFormView'
export const customFormView = {
    ...formView,
    Controller: CustomFormController,
};

registry.category("views").add("order_form_view", customFormView);
