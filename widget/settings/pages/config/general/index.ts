import { Option } from "widget/settings/shared/Option";
import { Header } from "widget/settings/shared/Header";

import options from "options";

export const BarGeneral = () => {
    return Widget.Box({
        class_name: "bar-theme-page",
        vertical: true,
        children: [
            Header('General Settings'),
            Option({ opt: options.theme.font.name, title: 'Font', type: 'string' }),
            Option({ opt: options.theme.font.size, title: 'Font Size', type: 'string' }),
            Option({ opt: options.theme.font.weight, title: 'Font Weight', subtitle: "100, 200, 300, etc.", type: 'number' }),
        ]
    })
}
