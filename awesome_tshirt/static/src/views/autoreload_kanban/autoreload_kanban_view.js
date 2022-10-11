/** @odoo-module **/

import { KanbanController } from "@web/views/kanban/kanban_controller";
import { registry } from "@web/core/registry";
import { kanbanView } from "@web/views/kanban/kanban_view";
import { useInterval } from "../../utils/timing";

const { useState } = owl;

export class AutoReloadKanbanController extends KanbanController {
    setup() {
        super.setup();
        this.autoReload = useState({value: false});
        useInterval(() => {
            if (this.autoReload.value) {
                this.model.load();
            }
        }, 30_000);
    }
    toggleAutoReload() {
        this.autoReload.value = !this.autoReload.value;
    }
}

const AutoReloadKanbanView = {
    ...kanbanView,
    Controller: AutoReloadKanbanController,
    buttonTemplate: "awesome_tshirt.KanbanView.Buttons",
};

registry.category("views").add("auto_reload_kanban", AutoReloadKanbanView);
