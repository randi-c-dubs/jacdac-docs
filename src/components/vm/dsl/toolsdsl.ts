import JDomTreeField from "../fields/JDomTreeField"
import TwinField from "../fields/TwinField"
import WatchValueField from "../fields/WatchValueField"
import {
    BlockDefinition,
    InputDefinition,
    INSPECT_BLOCK,
    TWIN_BLOCK,
    VariableInputDefinition,
    WATCH_BLOCK,
} from "../toolbox"
import BlockDomainSpecificLanguage from "./dsl"

const colour = "#888"

const toolsDSL: BlockDomainSpecificLanguage = {
    id: "tools",
    createBlocks: ({ supportedServices }) => [
        {
            kind: "block",
            type: TWIN_BLOCK,
            message0: `view %1 %2 %3`,
            args0: [
                <VariableInputDefinition>{
                    type: "field_variable",
                    name: "role",
                    variable: "none",
                    variableTypes: [
                        "client",
                        ...supportedServices.map(service => service.shortId),
                    ],
                    defaultType: "client",
                },
                {
                    type: "input_dummy",
                },
                <InputDefinition>{
                    type: TwinField.KEY,
                    name: "twin",
                },
            ],
            colour,
            inputsInline: false,
            tooltip: `Twin of the selected service`,
            helpUrl: "",
        },
        {
            kind: "block",
            type: INSPECT_BLOCK,
            message0: `inspect %1 %2 %3`,
            args0: [
                <VariableInputDefinition>{
                    type: "field_variable",
                    name: "role",
                    variable: "none",
                    variableTypes: [
                        "client",
                        ...supportedServices.map(service => service.shortId),
                    ],
                    defaultType: "client",
                },
                {
                    type: "input_dummy",
                },
                <InputDefinition>{
                    type: JDomTreeField.KEY,
                    name: "twin",
                },
            ],
            colour,
            inputsInline: false,
            tooltip: `Inspect a service`,
            helpUrl: "",
        },
        {
            kind: "block",
            type: WATCH_BLOCK,
            message0: `watch %1 %2`,
            args0: [
                <InputDefinition>{
                    type: "input_value",
                    name: "value",
                    check: ["Number", "Boolean", "String"],
                },
                <InputDefinition>{
                    type: WatchValueField.KEY,
                    name: "watch",
                },
            ],
            colour,
            inputsInline: true,
            tooltip: `Watch a value in the editor`,
            helpUrl: "",
        },
    ],
    createCategory: () => [
        {
            kind: "category",
            name: "Tools",
            colour: colour,
            contents: [
                <BlockDefinition>{
                    kind: "block",
                    type: WATCH_BLOCK,
                },
                <BlockDefinition>{
                    kind: "block",
                    type: TWIN_BLOCK,
                },
                <BlockDefinition>{
                    kind: "block",
                    type: INSPECT_BLOCK,
                },
            ],
        },
    ],

    convertToJSON: () => undefined,
}

export default toolsDSL
