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
                <li>
                    May 13th 2026, A few more sprouts came up in this time!
                    <img
                        src="may13.jpeg"
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
                    May 20th 2026, Even more sprouts are up now, but in turn the
                    main leaf I started the mescosm with now has a large gray
                    spot growing by the day. The water line is still holding
                    strong at arround 6 cm (5.9 if I'm being charitable) it
                    might be the case that the new sprouts are taking nutrients
                    from the leaf?
                    <img
                        src="may20.jpeg"
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
                First photo of is a forest invaded by earthworms, the second
                photo is of an earthworm by Julian Zwengel.
            </div>
        </div>
    );
};

export const EcologicalRelationships = () => {
    return (
        <div
            style={{
                "max-width": use(globalThis.mobile.mobile)
                    .and("auto")
                    .not()
                    .and("40vw"),
                "max-height": "600px",
                "overflow-y": "scroll",
            }}
        >
            <h2>Ecological Relationships</h2>
            <div class="spin">
                <div>
                    <img src="polaroid.png" />
                    Photo by Annie Spratt
                </div>
                <br />
                <div>
                    <img src="garlicmustard.jpg" />
                    Garlic Mustard, By O. Pichard - Own work, CC BY-SA 3.0
                </div>
                <br />
                <div>
                    <img src="garlicmustard2.jpg" />
                    Photo by sannse, Tapeley Park, Instow, North Devon, 14 May
                    2004.
                </div>
            </div>
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
            <div>
                There are many different types of ecological relationships!
                Here's most of them:
            </div>
            <ul>
                <li>
                    <b>Parasitism</b> When one species relies on another, to the
                    detriment of the host species.
                </li>
                <li>
                    <b>Pathogenicity</b> When one species infects a host species
                    causing illness or disease.
                </li>
                <li>
                    <b>Allelopathy</b> When one species releases chemicals to
                    impact growth or behavior of another species.
                </li>
                <li>
                    <b>Mutualism</b> When both species benefit from a
                    relationship.
                </li>
                <li>
                    <b>Commensalism</b> When one species benefits to the
                    indifference to the host species.
                </li>
                <li>
                    <b>Predator-Prey</b> When a predator species hunts and eats
                    a prey species.
                </li>
                <li>
                    <b>Intraspecific competition</b> When multiple organisms of
                    the same species fight for the same resources (i.e. a mate).
                </li>
                <li>
                    <b>Intraspecific cooperation</b> When multiple organisms of
                    the same species have a relationship for mutual benefit (i.e
                    a pack).
                </li>
            </ul>
            <div>
                Lets look at an example of allelopathy a little more because I
                think it's the hardest to understand.
            </div>
            <br />
            <br />
            <div>
                <i>Alliaria petiolata</i> or garlic mustard is an plant species
                with an allelopathic qualities. It produces chemicals like
                sinigrin that inhibit the fungi that help trees grow. Giving the
                garlic mustard a leg up when trying to spread and grow.
            </div>

            <div>
                Sources:
                <br />
                <RealLink href="https://en.wikipedia.org/wiki/Allelopathy#Examples">
                    en.wikipedia.org/wiki/Allelopathy
                </RealLink>
                <br />
                <RealLink href="https://www.dnr.state.mn.us/invasives/terrestrialplants/herbaceous/garlicmustard.html">
                    dnr.state.mn.us/invasives/terrestrialplants/herbaceous/garlicmustard.html
                </RealLink>
            </div>
        </div>
    );
};

export const CarbotFootprint = () => {
    return (
        <div
            style={{
                "min-width": use(globalThis.mobile.mobile)
                    .and("auto")
                    .not()
                    .and("40vw"),
                "max-height": "600px",
                "overflow-y": "scroll",
            }}
        >
            <h2>Carbon Footprint</h2>
            <style>
                {`
          .spin2{
            img{
              width: 100%;
              border-radius: 10px;
              display: block;
            }
            width: 100%;
            border-radius: 10px;
            float: right;
            margin: 10px;
          }
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
            <div class="spin">
                <div>
                    <img src="carbon.png" />
                    Photo by Сергей Крылов
                </div>
            </div>

            <div>
                Carbon is so important because all life is are based carbon
                compounds. From the smallest phytoplankton to the largest hippo
                or like lion, its all carbon compound turtles all the way down.
            </div>
            <br />
            <div>
                A carbon cycle diagram is a quick rough out of how this carbon
                travels throughout our environment. From our atmosphere to our
                producers, consumers, human factories and ground, carbon travels
                throughout.
            </div>
            <br />
            <RealLink href="carboncycle.jpeg">
                <div class="spin2">
                    <img src="carboncycle.jpeg" />
                </div>
                Here's my carbon cycle diagram.
            </RealLink>
            <br />
            <br />
            <div>
                The arrows are all labeled, but the general cycle of energy in
                the environment is pretty simple. A producer takes sunlight in
                CO2 to create organic carbon based compounds. So in my diagram
                that producer is a tree or a phytoplankton. That producer can
                then get reconsitituted, in the ocean you can see the
                phytoplankton get eaten by the comb jellyfish, and on land you
                see the tree get cut for wood. Then to re-release the energy as
                carbon. The comb jellfish via cell respiration releases the
                traped carbon into the water as CO2. The burning fire releases
                CO2 into the atmosphere by breaking down the carbon bonds into
                the wood. Then that CO2 in the air can either stay in the
                atmosphere contributing as a greenhouse gas, get used by another
                tree for photosythesis or disolve into the water. That water CO2
                can then be used by a phytoplankton and the carbon cycle kicks
                off anew.
            </div>
            <br />

            <div>
                Carbon released from human activity like shown in the diagram,
                i.e. burning carbon based organisms like the tree or similar,
                means our atmosphere is way more saturated with carbon now then
                it ever was. How much you personally contribute to that carbon
                saturation is your carbon footprint.
            </div>

            <RealLink href="carbonfootprint.png">
                <div class="spin2">
                    <img src="carbonfootprint.png" />
                </div>
                This is my estimated ecological footprint score. Included in
                that is releasing arround 11.9 tonnes of CO2 per year.
            </RealLink>

            <br />

            <div>
                There's a lot you can do to lower your carbon you footprint
                within reason. Driving less, and when you do drive, drive an EV,
                flying less, eating locally, eating vegan or vegetarian, are all
                things that would lower your carbon footprint.
            </div>
            <br />

            <RealLink href="https://xkcd.com/3226/">
                <div class="spin2">
                    <img src="https://imgs.xkcd.com/comics/home_solar.png" />
                </div>
            </RealLink>

            <br />
            <div>
                Sources:
                <br />
                <RealLink href="https://en.wikipedia.org/wiki/Phytoplankton">
                    https://en.wikipedia.org/wiki/Phytoplankton
                </RealLink>
                <br />
                <RealLink href="https://en.wikipedia.org/wiki/Ctenophora">
                    https://en.wikipedia.org/wiki/Ctenophora
                </RealLink>
                <br />
                <RealLink href="https://www.footprintcalculator.org/">
                    https://www.footprintcalculator.org/
                </RealLink>
                <br />
                <RealLink href="https://xkcd.com/2889/">
                    https://xkcd.com/2889/
                </RealLink>
            </div>
        </div>
    );
};

export const GreenhouseEffect = () => {
    return (
        <div
            style={{
                "min-width": use(globalThis.mobile.mobile)
                    .and("auto")
                    .not()
                    .and("40vw"),
                "max-height": "600px",
                "overflow-y": "scroll",
            }}
        >
            <h2>Greenhouse Effect and Climate Change</h2>

            <style>
                {`
          .spin2{
            img{
              width: 100%;
              border-radius: 10px;
              display: block;
            }
            width: 100%;
            border-radius: 10px;
            float: right;
            margin: 10px;
          }
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
            <div class="spin">
                <div>
                    <img src="greenhouse.png" />
                    Photo by Annie Spratt
                </div>
            </div>
            <h3>Act 1: The Greenhouse Effect</h3>
            <br />
            <div>
                Earth has an atmosphere made up of many gasses, lots of oxygen,
                lots of nitrogen. Oxygen and nitrogen don't absorb long wave
                radiation, so long wave radiation just passes through and
                doesn't heat up the atmosphere. Greenhouse gasses like methane
                CO2 and a whole cabal of gasses do. They make up 1% of
                atmosphere (D4.3.1) but are the biggest factor in heating up our
                planet. The short wave radiation from the sun bounces off the
                planet as long wave radiation and heats the planet a little.
                That long wave radiation then can get bounced back by greenhouse
                gasses, and when the hit the earth again they heat the planet
                even more. That's the greenhouse effect, thats what keeps our
                planet at the temp that it is (D4.3.1) and ready for life.
            </div>
            <br />
            <div>
                Human activity is a huge driver of both releasing methane and
                CO2, anthropogenic gasses, contributing significantly to the
                rise of the intensity the greenhouse effect has on our world.
                Industries, like transport, energy, manufacturing, and
                agriculture are massive contributors to greenhouse gas
                emissions.
            </div>
            <iframe
                src="https://ourworldindata.org/grapher/ghg-emissions-by-sector?tab=line"
                loading="lazy"
                style="width: 100%; height: 600px; border: 0px none;"
                allow="web-share; clipboard-write"
            ></iframe>
            <br />
            <div>
                Based on the daily recording of carbon dioxide levels at the
                Mauna Loa Observatory in Hawaii we can see the steady rise.
                Becoming nearly 100 pm more concentrated over a period from 1960
                to 2007 (13.4 - Climate Change Evidence). We can see that the
                climate is very much changing imperially.
            </div>
            <br />
            <div>
                Have you ever been down, down south to the great American
                southwest? The Californias, the Nevadas, the New Mexicos of the
                world. They're home to some of the largest ponderosa pine
                population. Their population has been has been dwindling in
                recent years with ecologists suggesting they aren't coming back.
                The first major killer is the global rising temperatures from to
                the anthropogenic greenhouse gases heating the earth and causing
                constant drought conditions. Bubbles form under the tree bark
                without enough moisture and weaken a tree's structure. The other
                killer is the lack of wildfires. Without a steady stream of
                wildfires culling weak population, you end up with packed
                forests that are incredibly vulnerable. When a fire does rip
                through, it means total ecological destruction. There are groups
                attempting to stop the death of the ponderosa but with a largely
                unreceptive government its hard to say how much progress can
                really get made.
                <br />
                To find out more read the below article (all information was
                sourced from the below article):
            </div>
            <br />
            <div>
                <iframe
                    src="nyt.pdf"
                    loading="lazy"
                    style="width: 100%; height: 600px; border: 0px none;"
                    allow="web-share; clipboard-write"
                ></iframe>
            </div>
            <br />
            <h3>Act 2: Sustainability</h3>
            <br />
            <div>
                A stable ecosystem needs a steady supply of energy (this is
                normally the sun), nutrient cycling without leakages, and high
                genetic diversity within a population (D4.2.2). Good nutrient
                cycling means that chemicals like nitrogen are washing out
                downstream and entering a new ecosystem. And high genetic
                diversity means that if one member of a species is vulnerable to
                a certain threat, there's resistance to that threat spreading.
                This is important for keystone species specifically, because the
                ecosystem relies on them, if they die the ecosystem collapses
                like an arch without a keystone. The only way a stable ecosystem
                can stay stable is with resilience to bounce back after a
                threat, and resistance against a threat in the moment. With both
                these qualities, things like droughts and viruses can be
                overcome.
            </div>
            <br />
            <div>
                Eutrophication is another threat, but one cause directly by
                humans. Plants use nutrients in the soil, overtime without
                enough decomposers or specific crop the soil will run out of
                nutrients and plants grown in it will be less fit. To combat
                this human agriculture takes advantage of phosphate and nitrate
                high fertilizer to re-enrich the soil. Water naturally drains
                through soil, from rainfall or farming. And water naturally
                picks up nutrients as it travels downstream. So it happens that
                the phosphates and nitrates end up in our ponds and lakes. That
                process, the nutrients entering the water supply is
                eutrophication. So these eutrophized lakes are home to algae, as
                well as other other water plants that feed off of phosphates and
                nitrates, giving them the ability for mass population growth.
                The population is unable to be sustained so algae on mass dies
                and float to the surface. The dead algae starts to block out the
                light for the other water plants, causing even more death. In
                swing the saphtrophic bacteria begin feeding off the newly dead,
                saphtrophic bacteria that also takes in oxygen. Now that there's
                less oxygen in the water, the water ends up with a lower ph,
                higher acidity. Fish have a range of tolerance for acidity, and
                many fish begin to die in the new water. All of this is sourced
                from D4.2.6 to D4.2.7.{" "}
            </div>
            <br />
            <div>
                So we've talked about things that hurt the sustainability of an
                ecosystem. When is it too much? Ecosystem rely on feedback
                loops, the Amazon rainforest gets as much rain as it does
                because of high amounts of plant transpiration (water from
                plants evaporating) in the region. So If deforestation run
                rampant, and suddenly the rainforest is starting to look a lot
                more like just a forest. Then eventually it'll reach a tipping
                point, it'll convert from one stable ecosystem to another.
                There's just not enough water flowing through the system. If
                there's not enough water, it gives the opportunity for a single
                forest fire to rip through and take out the entire forest. At
                that point there's no going back. Just not enough rain to make
                the trees that make the rain. (D4.2.3)
            </div>
            <br />
            <div>
                What can humans to to prevent the decline of these ecosystems
                even in the face of crossing this tipping points? We need to
                only take from an ecosystem what it has to give. That yield is
                called the "maximum sustainable yield" and means that what we
                take shouldn't hurt the population, (D4.2.6)
            </div>
            <br />
            <h3>Act 3: Climate Change</h3>
            <br />
            <div>
                Anthropogenic gases encouraging the greenhouse effect (as
                discussed in Act 1) are the main driver of climate change.
                That's at least the genesis of the modern climate change
                problem, but the deeper our climate enters it's problem the
                harder it is to stop. Positive feedback loops are caused by
                loops that cause themselves. All you need is the initial kick to
                start melting our permafrost. Once the permafrost begins to melt
                it release they trapped methane in the dead plants. Methane of
                course is a greenhouse gas and begins to warm to the planet even
                more, melting more permafrost, releasing more methane (D4.3.2).
                It becomes much harder to just reduce our greenhouse gases while
                we also need to make up for thousands of these little positive
                feedback loops.
            </div>
            <br />
            <div>
                Climate change also has an effect on other ecosystems like coral
                reefs. Oceans are carbon sinks, but at a cost. While the ocean
                can take in CO2 from the atmosphere, higher CO2 in the ocean can
                also mean the collapse of coral reefs. Corals need carbonate
                ions to build their structures. Through a series of chemical
                reactions, more CO2 means less concentrated carbonate ions
                making it harder for corals to build their reefs (D4.3.7). Reefs
                of course are ubernexuses for ocean biodiversity so reduced
                reefs means less biodiversity.
            </div>
            <br />
            <div>
                Animal behavior also changes in response to climate change. The
                higher you go the colder the temperatures, so hotter
                temperatures at traditional layers of elevation of evolution
                pushes organisms to climb. The range of elevations at which
                habitats can support certain organisms to live at is rising on
                mass. Mountain dwelling, or montane organisms with easy access
                to elevated land are excepted to move up slope as climate change
                continues to get work. (D4.3.6)
            </div>
            <br />
            <div>
                Greenhouse gases, as should have been blindingly obvious by the
                previous paragraphs, are a huge threat. So investing in
                technology that sequesters the rising of carbon in our
                atmosphere would only be a boon. Carbon capture is one
                technology that could slow climate change, or natural carbon
                sequestering like planting plants might be viable. Specifically
                planting trees can be a natural form of carbon sequestering.
                (D4.3.8)
            </div>
        </div>
    );
};
