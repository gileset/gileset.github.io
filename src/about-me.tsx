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
            I run{" "}
            <RealLink href="https://foxmoss.com/blog/">
                a blog (click me!)
            </RealLink>{" "}
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
            <RealLink href="onepager.svg">
                <img src="onepager.svg" />
            </RealLink>
        </div>
    );
};

export const Mesocosm = () => {
    return (
        <div style={{ "max-height": "600px", "overflow-y": "scroll" }}>
            <h2>Mesocoms</h2>
            <img
                src="mesocosm.jpeg"
                style={{
                    "max-width": use(globalThis.mobile.mobile)
                        .and("auto")
                        .not()
                        .and("20vw"),
                    "border-radius": "10px",
                }}
            />
            <br />
            We can learn a lot from studying a mesocosm. Being able to take a
            small section of life and control the factors means we can extract &
            analyse specific features of the environment. See how important each
            part of an environment is for mutual success. For ours though, we
            were just watching if life can be sustainable without any inputs
            barring light to an environment.
            <br />
            <br /> Materials I used:
            <ul>
                <li>Two alkaline plastic water bottles</li>
                <li>A bakers dozen centimeters of rope</li>
                <li>A sharp thing</li>
                <li>Water</li>
                <li>Some water plants</li>
                <li>Dirt</li>
                <li>A worm (I named mine Prometheus)</li>
                <li>A plant sprout</li>
                <li>Seeds</li>
                <li>Lots and lots of tape</li>
            </ul>
            <br />
            <br />
            Steps I took:
            <ol>
                <li>Cut the top half of one of the bottles off.</li>
                <li>Cut the other bottle's bases off.</li>
                <li>Recycle the base, so you're left with 3 segments.</li>
                <li>Run a rope though the segment that is a top & a shaft.</li>
                <li>Put water in the bottle without a top.</li>
                <li>
                    Tape the bottle top & shaft upside down on the bottle
                    without a top, so that the water could run up the string to
                    the top half.
                </li>
                <li>Lay down some dirt in the upside top.</li>
                <li>Place a worm, some seeds, and a plant in the dirt.</li>
                <li>
                    Trap the worm forever by putting the last segment of bottle
                    left over it.
                </li>
                <li>
                    Shackle the worm by making the bottle air tight with tape.
                </li>
                <li>Enjoy!</li>
            </ol>
            <br />
            Prometheus was entombed on April 23rd 2026.
            <br />
            <br />
            Observations:
            <ul>
                <li>
                    April 24th 2026, I didn't see condensation on the top half
                    so I taped it up more.
                </li>
                <li>
                    April 27th 2026, I saw condensation so I stoped taping up
                    the bottle. I didn't see any change in the water, soil or
                    worm.
                </li>
                <li>
                    May 1st 2026, I drew the mesocosm. Little changes from the
                    last observation. Water line touches the cap.{" "}
                    <img
                        src="may1.jpeg"
                        style={{
                            "max-width": use(globalThis.mobile.mobile)
                                .and("auto")
                                .not()
                                .and("20vw"),
                            "border-radius": "10px",
                        }}
                    />
                </li>
                <li>
                    May 6th 2026, I have 11 sprouts growing in my mesocosm now.
                    The waterline is at 6 cm. The bottom of the cap is at
                    roughly 6.5 cm. The worm is still no where to be seen.
                    <img
                        src="may6.jpeg"
                        style={{
                            "max-width": use(globalThis.mobile.mobile)
                                .and("auto")
                                .not()
                                .and("20vw"),
                            "border-radius": "10px",
                        }}
                    />
                </li>
            </ul>
        </div>
    );
};

export const InvasiveSpecies = () => {
    return (
        <div
            style={{
                "min-width": use(globalThis.mobile.mobile)
                    .and("auto")
                    .not()
                    .and("40vw"),
                background: "url(wormbg.jpg)",
                "background-size": "cover",
                "background-position": "center",
                "border-radius": "10px",
                padding: "10px",
            }}
        >
            <h2>Invasive Species - Earthworms</h2>

            <div>
                Invasive species are species that were introduced and have
                spread out to cause harm to the native community.
            </div>
            <br />
            <div>
                Here we'll be talking about the spread of earthworms in
                Minnesota. Earthworms originate from Europe, the Pacific
                Northwest, and the South Eastern US. The stayed largely out of
                Minnesota before European settlement because of out harsh
                climate. Now the earthworms have come and to Minnesotas forests
                and they're slowly spreading largely due to human involvement.
                The spread has two culprits. One: fishing bait, and two:
                gardening of plants brought of over from Europe.
            </div>
            <br />
            <div>
                The Minnesotan ecosystem is not fit to handle earthworms. Our
                forests are built on a layer of duff, duff is built up of fallen
                leaves and decomposing organic matter. When the earthworms show
                up they feed on the duff. Worms are decomposers after all.
                Without the duff, seedlings, many ferns, and flowers begin to
                die.
            </div>
            <br />
            <div>
                So how do we prevent earthworms from spreading? Keeping worms
                bought for gardening or fishing out of nature and properly
                disposed off is the only real viable way of stopping the spread.
                It's nearing impossible to tear up our forests removing
                earthworms without damaging the ecosystem more then it already
                has.
            </div>
            <br />
            <RealLink href="https://www.dnr.state.mn.us/invasives/terrestrialanimals/earthworms/index.html">
                Info from
                dnr.state.mn.us/invasives/terrestrialanimals/earthworms/index.html.
            </RealLink>
            <br />
            <div style={{ "max-height": "100px", display: "flex" }}>
                <img
                    src="invadedforrest.jpg"
                    style={{ "object-fit": "contain" }}
                />
                <img src="earthworm.jpeg" style={{ "object-fit": "contain" }} />
            </div>
            <div>
              First photo of is a forest invaded by earthworms, the second photo is of an earthworm by Julian Zwengel.
            </div>
        </div>
    );
};
