import { type ComponentChild, css, type Component } from "dreamland/core";
import { Row } from "./box";
import { backgroundColor, backgroundText, lightColor } from "./colors";
import { Personal } from "./main";

const Blog: Component<{}, {}> = function () {
    return <div></div>;
};

export const NavBar: Component<
    { url: string; mobile: boolean },
    {
        pages: Record<string, { name: string; page: ComponentChild }>;
        path: string;
    }
> = function () {
    this.path = "/";

    this.pages = {
        "/": {
            name: "Ellison-Taylor, Giles",
            page: <Personal mobile={use(this.mobile)} />,
        },
    };

    return (
        <div>
            <div class="bar">
                {Object.keys(this.pages).map((key) => {
                    let val = this.pages[key];

                    return (
                        <span
                            class={use(this.mobile)
                                .and(
                                    "mobile " +
                                        (key === this.path
                                            ? "mobileSelected"
                                            : "mobileBar"),
                                )
                                .or(
                                    key === this.path
                                        ? "desktopSelected"
                                        : "desktopBar",
                                )}
                            on:click={() => {
                                window.location.assign(key);
                            }}
                        >
                            {val.name}
                        </span>
                    );
                })}
            </div>
            <div class="lowbar">
                This is a photo by Kyle Glenn of Guerneville, California in the
                US. I grew up in the west coast, so the heavily forested walks
                of my early childhood still hold a place in my heart.
            </div>
            {use(this.path).map((path) => this.pages[path].page)}
        </div>
    );
};

NavBar.style = css`
    :scope {
    }
    .bar {
        margin-left: 10px;
        margin-top: 20px;
    }
    .lowbar {
        position: absolute;
        bottom: 10px;
        margin-left: 10vw;
        margin-right: 10vw;
        margin-top: 20px;
        color: ${backgroundText};
    }
    .desktopBar {
        background: ${lightColor};
        padding: 4px;
        border-radius: 10px;
        margin: 5px;
        cursor: pointer;
    }
    .desktopSelected {
        background: ${backgroundColor};
        border: 2px solid ${lightColor};
        color: ${lightColor};
        padding: 4px;
        border-radius: 10px;
        margin: 5px;
    }
    .mobileBar {
        background: ${lightColor};
        padding: 4px;
        border-radius: 0px;
        margin: 5px;
        cursor: pointer;
    }
    .mobileSelected {
        background: ${backgroundColor};
        border: 2px solid ${lightColor};
        color: ${lightColor};
        padding: 4px;
        border-radius: 0px;
        margin: 5px;
    }
`;
