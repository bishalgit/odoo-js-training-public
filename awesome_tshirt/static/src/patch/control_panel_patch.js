/** @odoo-module **/

import { patch } from '@web/core/utils/patch';
import { ControlPanel } from '@web/search/control_panel/control_panel';
import { useService } from "@web/core/utils/hooks";
import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog";


patch(ControlPanel.prototype, "awesome_tshirt.control_panel_patch", {
    setup() {
        this._super(...arguments);
        this.dialogService = useService("dialog");
    },
    openDialog() {
        this.dialogService.add(ConfirmationDialog, {
            body: this.env._t(
                "Bafien is watching you. This interaction is recorded and may be used in "
                + "legal proceedings if necessary. Do you agree to these terms?"
            ),
            confirm: () => {},
            cancel: () => {},
        });
    }
});
