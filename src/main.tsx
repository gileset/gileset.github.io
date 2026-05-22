import { css, createState, type Component } from "dreamland/core";
import "./index.css";
import "./wm.css";
import { Box, Row } from "./box";
import { Link } from "./link";
import { AboutMe, Animate, Buttons, CarbotFootprint, Contact, EcologicalRelationships, GreenhouseEffect, InvasiveSpecies, Mesocosm, OnePager } from "./about-me";
import { NavBar } from "./navbar";
import { backgroundColor, lightColor, textColor } from "./colors";

let url: string | undefined;

globalThis.mobile = createState({
    mobile: true,
});

const App: Component = function () {
    this.cx.mount = () => {
        globalThis.mobile.mobile = window.screen.width < 500;
    };

    return (
        <div
            id="app"
            class={use(globalThis.mobile.mobile).and("mobile").or("desktop")}
        >
            {use(globalThis.mobile.mobile).and(() => (
                <div
                    class="annoying"
                    on:click={() => {
                        globalThis.mobile.mobile = false;
                    }}
                >
                    You are viewing the mobile version of the site. Click me to
                    disable.{" "}
                </div>
            ))}

            <NavBar url="/" mobile={use(globalThis.mobile.mobile)} />
        </div>
    );
};
App.style = css`
    .mobile {
        height: 100vh;
        max-width: 100vw;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .desktop {
        max-height: 100vh;
        max-width: 100vw;
        overflow: hidden;
    }
    .annoying {
        text-align: center;
        font-size: large;
        background-color: black;
        color: white;
        padding: 10px;
        margin-bottom: 30px;
    }
`;

export const Personal: Component<
    {
        mobile: boolean;
    },
    {}
> = function () {
    return (
        <div>
            {" "}
            {use(this.mobile)
                .and("")
                .or(<div id="boxHub" class="boxHub" />)}
            <div class={use(this.mobile).and("").or("predisplayed")}>
                <Row mobile={use(this.mobile)}>
                    <Box x={0} y={0} z={0} mobile={use(this.mobile)}>
                        <div
                            style={{
                                width: use(this.mobile).and("auto").or("400px"),
                            }}
                        >
                            <h1>Giles Ellison-Taylor</h1>
                            <br />
                            <div>About Me:</div>
                            <ul>
                                <li>
                                    <Link
                                        content={AboutMe}
                                        mobile={use(this.mobile)}
                                    >
                                        Autobiography
                                    </Link>
                                </li>
                                <br />
                            </ul>
                            <div>My biology work:</div>
                            <ul>
                                <li>
                                    <Link
                                        content={OnePager}
                                        mobile={use(this.mobile)}
                                    >
                                        Organisms and Adaptations to Environment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        content={Mesocosm}
                                        mobile={use(this.mobile)}
                                    >
                                        Mesocosms
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        content={InvasiveSpecies}
                                        mobile={use(this.mobile)}
                                    >
                                        Invasive Species
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        content={EcologicalRelationships}
                                        mobile={use(this.mobile)}
                                    >
                                        Ecological Relationships
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        content={CarbotFootprint}
                                        mobile={use(this.mobile)}
                                    >
                                        Carbon Footprints & The Carbon Cycle
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        content={GreenhouseEffect}
                                        mobile={use(this.mobile)}
                                    >
                                        Greenhouse Effect
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Box>
                </Row>
                {use(this.mobile).and(<div id="boxHub" class="mobileBox" />)}
            </div>
        </div>
    );
};

Personal.style = css`
    .spin {
        width: 150px;
        border-radius: 10px;
        float: right;
        margin: 10px;
    }
    .spinMobile {
        width: 200px;
        border-radius: 10px;
    }
    .mobileBox {
        margin-bottom: 50vh;
    }
    .boxHub {
        position: absolute;
        top: 0;
        left: 0;
    }
    .predisplayed {
        margin-top: 150px;
    }
`;

export default (path?: string) => {
    url = path;
    return <App />;
};
