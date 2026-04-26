import { Link, RealLink, SmallLink } from "./link";

export const AboutMe = () => (
    <div
        style={{
            "min-width": use(globalThis.mobile.mobile)
                .and("auto")
                .not()
                .and("500px"),
            "max-height": "600px",
            "overflow-y": "scroll",
        }}
    >
        <h2>Autobiography</h2>
        <br />
        <div class="spin">
            <img src="/me.png" />
            Me in Boston for a hackathon on a private island!
        </div>
        <div class="spin">
            <img src="/penn.gif" />
            This is my friend Penn at an event I hosted.
        </div>
        <h4>I am Giles Ellison-Taylor (they/them)</h4>
        <div>
            I come from British heritage. My dad immigrated from the greater
            Manchester area at the turn of the millennia and has lived here ever
            since.
        </div>
        <br />
        <div>
            Right now I am a sophomore in high school, I really like how much
            more autonomy I have in my life. I'm able to fly across the world
            alone, and make decisions about my future for myself.
        </div>
        <br />
        <div>
            This website I am making for IB Biology Year 1, and I've enjoined
            the experience quite a bit. My favorite section was learning about
            the molecular machines that make up a cell. I like knowing that the
            basis of life is tiny consistent thoughtless processes. It gives me
            solace that at a deep level life is consistent, simple.{" "}
        </div>
        Biology Skills:
        <ul>
            <li>
                I can calculate probablities of inheriting genes based on family
                trees.
            </li>
            <li>I can determine the protiens made from source genes.</li>
            <li>I can examine how related two species are based on DNA.</li>
        </ul>
        <br />
        <br />
        <div>
            In the future and years on, I want to learn how the brain works and
            the processes that govern our neurons and nervous system.
        </div>
        <br />
        <RealLink href="https://xkcd.com/1053/">
            <img src="https://imgs.xkcd.com/comics/ten_thousand.png" />
        </RealLink>
        <div>
            Above is one of my favorite comics by Randall Monroe. He has some
            poignant commentary but the one I've attached is just sweet.
        </div>
        <br />
        <br />
        <img src="tobias.jpg" />
        <div>
            This is David Cross playing Tobias Funke in Arrested Development.
            He's one of my favorite TV characters out of everything that I've
            seen.
        </div>
        <br />
        <div>
            I run <RealLink href="https://foxmoss.com/blog/">a blog (click me!)</RealLink>{" "}
            I'm quite proud of. If you're into computers I'd give it a read.
        </div>
        <br />
        <style>
            {`
      .spin{
        img{
          width: 250px;
          border-radius: 10px;
        }
        width: 250px;
        border-radius: 10px;
        float: right;
        margin: 10px;
      }
      `}
        </style>
    </div>
);
export const Kpop = () => (
    <div
        style={{
            "min-width": use(globalThis.mobile.mobile)
                .and("auto")
                .not()
                .and("400px"),
        }}
    >
        <h2>Kpop</h2>
        <div>
            I mostly listen to girl groups, mostly NewJeans and Le Sseraphim.
            I'm not really deep into the community, I just like the music :P
        </div>
    </div>
);

export const Animate = () => (
    <img style={{ "border-radius": "10px" }} src="/spin.gif" />
);
export const Wisp = () => (
    <div
        style={{
            "min-width": use(globalThis.mobile.mobile)
                .and("auto")
                .not()
                .and("400px"),
        }}
    >
        <h2>Wisp</h2>
        <div>
            Wisp is a proxing protocol, similar to socks5 and bare. It is meant
            for multiplexing streams of TCP and UDP traffic through a websocket,
            though has found use in other applications.
        </div>
        <br />
        <div>
            I created{" "}
            <RealLink href="http://github.com/MercuryWorkshop/Woeful">
                Woeful
            </RealLink>
            , and helped develop out the{" "}
            <RealLink href="https://github.com/MercuryWorkshop/wisp-protocol">
                Wisp protocol
            </RealLink>
            .
        </div>
    </div>
);
export const Mediaology = () => (
    <div
        style={{
            "min-width": use(globalThis.mobile.mobile)
                .and("auto")
                .not()
                .and("400px"),
        }}
    >
        <h2>Mediaology</h2>
        <div>
            Also known by other meaningless titles, such as "Moss News", "Fish
            Me", and relectuntantly "H311tak3r Unb10k3d U1timat3 Gam3s 666".
        </div>
        <br />
        <div>
            Mediaology is the now defunct unblocked game website. The URL you
            are curently on may have previously been used for hosting the late
            website.
        </div>
    </div>
);
export const Buttons = () => {
    return (
        <div
            style={{
                "min-width": use(globalThis.mobile.mobile)
                    .and("auto")
                    .not()
                    .and("400px"),
            }}
        >
            <h2>88x31 Web Buttons</h2>
            Here is my collection with links, or an acompanied explanation.
            <div style={{ display: "flex", gap: "8px", "flex-wrap": "wrap" }}>
                <Link content={DreamlandButton}>
                    <img src="/dreamland.png" />
                </Link>
                <RealLink href="https://anybrowser.org/campaign/index.html/">
                    <img src="/any-browser.png" />
                </RealLink>
                <SmallLink content="This is my button, I license under Creative Commons 0. Feel free to use it on your own site.">
                    <img src="/foxmossbutton.png" />
                </SmallLink>
                <RealLink href="https://velzie.rip/">
                    <img src="https://velzie.rip/88x31.png" />
                </RealLink>
                <RealLink href="https://bomberfish.ca/">
                    <img src="/bomberfish.gif" />
                </RealLink>
            </div>
        </div>
    );
};
export const DreamlandButton = () => {
    return (
        <div
            style={{
                "min-width": use(globalThis.mobile.mobile)
                    .and("auto")
                    .not()
                    .and("400px"),
            }}
        >
            I also made this button! Creative Commons 0 if you would like to use
            it. It is for the{" "}
            <RealLink href="https://dreamland.js.org/">
                Dreamland Javascript Framework
            </RealLink>
            which was used to create this site.
        </div>
    );
};
export const Contact = () => {
    return (
        <div>
            <div>
                Discord: <pre>foxmoss_</pre>
            </div>
            <div>
                Email Address: <pre>foxmoss@mediaology.com</pre>
            </div>
            <div>
                Monero:{" "}
                <div
                    style={{
                        "font-size": "x-small",
                        "max-width": "20vw",
                        display: "block",
                        "overflow-wrap": "anywhere",
                        cursor: "pointer",
                    }}
                    on:click={() => {
                        navigator.clipboard.writeText(
                            "49A955UvYmEBWWTXcxe3vd7YnBpGa85hu88Gx1TrJpELFb6QNLapTJ1SAtVMqrwFePBdnKgpgGdizPsN5MCeDoEA6PF7HW1",
                        );
                        alert("Copied my Monero wallet address.");
                    }}
                >
                    49A955UvYmEBWWTXcxe3vd7YnBpGa85hu88Gx1TrJpELFb6QNLapTJ1SAtVMqrwFePBdnKgpgGdizPsN5MCeDoEA6PF7HW1
                </div>
            </div>
        </div>
    );
};

export const OnePager = () => {
    return (
        <div
            style={{
                "min-width": use(globalThis.mobile.mobile)
                    .and("auto")
                    .not()
                    .and("40vw"),
            }}
        >
            <RealLink href="onepager.svg"><img src="onepager.svg" /></RealLink>
        </div>
    );
};
