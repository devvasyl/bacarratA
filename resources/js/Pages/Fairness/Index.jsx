import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import img from "../../../../public/images/fairness/headerBg.png";
import imgmobile from "../../../../public/images/fairness/headerBgmobile.png";
import arrowup from "../../../../public/images/svg/arrowup.svg";
import arrowdown from "../../../../public/images/svg/arrowdown.svg";
import fairnessIcon from "../../../../public/images/fairness/fairness.svg";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import ImageGridLayout from "@/Components/ImageGrid/ImageGridLayout";
import Text from "@/Components/Text/Text";
import { Flex } from "@/Components/UtilComponents/Flex";
import CopyableLink from "@/Components/UtilComponents/CopyableLink";
import Button from "@/Components/Button/Button";
import { useState } from "react";

const FairnessPageWrapper = styled("div")(() => ({
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "0em",
    width: "100%",
    height: "100%",
}));

const BgWithText = styled("div")(({ color, isMobile }) => ({
    background: "#2D3058",
    borderRadius: "10px",
    padding: "10px 30px",
    textAlign: "center",
    width: isMobile ? "100%" : "30%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&::before": {
        content: '""',
        position: "absolute",
        top: "20%",
        left: "30%",
        width: "50%",
        height: "50%",
        // background: 'red',
        background: `${color}`,
        filter: "blur(90px)",
        borderRadius: "10px 0px 50px",
        opacity: "0.8",
        zIndex: 1,
    },
}));

const PrimaryText = styled("p")(({ color }) => ({
    fontSize: "100px",
    fontWeight: "bold",
    lineHeight: "100px",
    fontFamily: 'Montserrat, "Helvetica", "Arial", sans-serif',
    background: `linear-gradient(127.1deg, ${color[0]} 17.29%, ${color[1]} 87.58%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    paddingBottom: "10px",
}));

const FrequentlyAsked = styled("div")(({ isMobile }) => ({
    marginTop: isMobile ? "-2rem" : "2rem",
}));

const FairnessImageHeader = styled("div")(({ isMobile }) => ({
    background: `url(${isMobile ? imgmobile : img})`,
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat, no-repeat",
    padding: isMobile ? "1.25rem" : "4.125rem",
    paddingLeft: isMobile ? "1.25rem" : "4.125rem",
    margin: "0 25px",

    "& p": {
        color: "#fff",
        lineHeight: "2.25rem",
        fontWeight: "900",
        "&:nth-child(1)": {
            fontSize: isMobile ? "1.4rem" : "3rem",
            paddingBottom: isMobile ? ".5rem" : "1.5rem",
        },
        "&:nth-child(2)": {
            fontSize: isMobile ? "1.4rem" : "3rem",
            paddingBottom: isMobile ? ".5rem" : "2rem",
        },
        "&:nth-child(3)": {
            fontSize: isMobile ? ".6rem" : ".9rem",
            lineHeight: "1.2rem",
            fontWeight: "medium",
            color: "#FFEF61",
        },
    },
}));

const FairnessContentWrapper = styled("div")(({isMobile}) => ({
    marginTop:  isMobile ? '-40px' : "80px",
    textAlign: "center",
    position: "relative",
    zIndex: 2000,
}));

const Accordion = ({ isMobile }) => {
    const accordionItems = [
        {
            text: "What is a Server Seed ?",
            content:
                "Server Seed is a random sequence of 64 symbols (numbers and letters) generated by a server.",
            id: 1,
        },
        {
            text: "How does hashing proceed?",
            content:
                "The provably fair system on BetFury is based on the SHA256 algorithm and consists of Random seed. Every round has its own hash that consists of Random winning uniquely generated for every bet.",
            id: 2,
        },
        {
            text: "What is a Random Seed?",
            content:
                "Random seed is a combination of Random winning number and Server seed.",
            id: 3,
        },
        {
            text: "When is the random number generated?",
            content:
                "Random Lucky result is generated and mixed with random Server seed for every bet. You may see the Hash round before you make a bet in the Fairness section.",
            id: 4,
        },
        {
            text: "What is a Hash Round?",
            content:
                "It’s a specific formula for turning a piece of digital data like a paragraph of text or a file, into a line of characters called a hash of the data.",
            id: 5,
        },
        {
            text: "Why SHA-256?",
            content:
                "Presently SHA-256 is the most secure hashing function. This function expresses the possible combinations or values that result from the given input data. Using the SHA-256 function makes it (nearly) impossible to duplicate a hash because there are just too many combinations to try and process.",
            id: 6,
        },
    ];

    const [active, setActive] = useState(-1);
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "50px 0",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gridGap: "40px",
                    width: isMobile ? "80%" : "50%",
                    alignItems: "start",
                }}
            >
                {accordionItems.map((item, index) => (
                    <div
                        style={{
                            width: "100%",
                            paddingBottom: "10px",
                            borderBottom: "1px solid #8790AF",
                            cursor: "pointer",
                        }}
                        key={index}
                        onClick={() => {
                            setActive(active === index ? -1 : index);
                        }}
                    >
                        <Flex
                            alignItems="flex-start"
                            justifyContent="space-between"
                        >
                            <div>
                                <Text
                                    type="p"
                                    text={item.text}
                                    fontSize="16px"
                                    color="#8790AF"
                                    textAlign="left"
                                />
                                {active === index && (
                                    <Text
                                        type="p"
                                        text={item.content}
                                        fontSize="16px"
                                        color="#8790AF"
                                        textAlign="left"
                                    />
                                )}
                            </div>
                            <img
                                src={active === index ? arrowup : arrowdown}
                                alt=""
                            />
                        </Flex>
                    </div>
                ))}
            </div>
        </div>
    );
};

const FairnessIndex = () => {
    const { isMobile } = useScreenResolution();
    return (
        <>
            <Head title="Fairnesss" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <FairnessPageWrapper>
                        <FairnessImageHeader isMobile={isMobile}>
                            <p>HOW TO CHECK</p>
                            <p>FAIRNESS?</p>
                            <p>
                                Every Lucky result on BCBOOM is <br />{" "}
                                absolutely random. Check it yourself!
                            </p>
                        </FairnessImageHeader>
                        <ImageGridLayout
                            item={{ title: "Fairness", icon: fairnessIcon }}
                            index={0}
                            page="vip"
                        >
                            <FairnessContentWrapper isMobile={isMobile}>
                                {!isMobile && (
                                    <div
                                        style={{
                                            margin: "0 auto",
                                            width: "40%",
                                        }}
                                    >
                                        <Text
                                            type="p"
                                            text="HOW DOES IT WORK?"
                                            fontSize="24px"
                                            background="linear-gradient(90.46deg, #3F8BFF 0.19%, #5EFFD8 100%)"
                                            WebkitBackgroundClip="text"
                                            WebkitTextFillColor="transparent"
                                            backgroundClip="text"
                                            textFillColor="transparent"
                                            fontWeight="900"
                                            fontStyle="italic"
                                        />
                                        <Text
                                            type="p"
                                            text="The provably fair principle is based on SHA256 technology the same as Bitcoin. The procedure of checking bets result allows you to verify the fairness of each bet."
                                            fontSize="15px"
                                            color="#BACBEA
                                    "
                                        />
                                    </div>
                                )}
                                <Flex
                                    alignItems="stretch"
                                    direction={isMobile ? "column" : "row"}
                                    gap="20px"
                                    margin={isMobile ? "100px 2px" : "50px"}
                                >
                                    <BgWithText
                                        color="#58FFEB"
                                        isMobile={isMobile}
                                    >
                                        <PrimaryText
                                            color={[
                                                "#58FFEB",
                                                "rgba(73, 255, 91, 0.87)",
                                            ]}
                                        >
                                            01
                                        </PrimaryText>
                                        <Text
                                            type="p"
                                            text="Press Fairness"
                                            color="#FFF494"
                                            fontSize="20px"
                                            paddingBottom="10px"
                                            fontWeight="bold"
                                        />
                                        <Text
                                            type="p"
                                            text='Before placing a bet you may check the hash of the next round number in the "Fairness" pop-up. Hash is a random result, generated and mixed with random Server seed. Every round has its own hash. No-one knows the result before placing a bet'
                                            paddingBottom="10px"
                                            color="white"
                                            fontSize="12px"
                                            fontWeight="bold"
                                        />
                                        <div
                                            style={{
                                                border: "2px solid #60FCFF",
                                                padding: "10px",
                                                textAlign: "center",
                                                borderRadius: "12px",
                                                margin: "20px auto",
                                                // marginTop: "20px",
                                                width: "90%",
                                            }}
                                        >
                                            <Text
                                                type="p"
                                                text="FAIRNESS"
                                                color="#FFF494"
                                                fontSize="14px"
                                                fontWeight="bold"
                                                paddingBottom="10px"
                                            />
                                            <Text
                                                type="p"
                                                text="A probably fair system based on the SHA256 algorithm and
includes a random number = a combination of a random
winning number and the initial number of the server. Each
round has its own hash, consisting of random wins that are uniquely generated for each bet."
                                                color="#ABB7E2"
                                                fontSize="10px"
                                            />
                                        </div>
                                        <CopyableLink
                                            text="0e3232312313131343321657543433216575434332165754"
                                            addon
                                        />
                                    </BgWithText>
                                    <BgWithText
                                        color="#3D89FA"
                                        isMobile={isMobile}
                                    >
                                        <PrimaryText
                                            color={["#5873FF", "#49FFD3"]}
                                        >
                                            02
                                        </PrimaryText>
                                        <Text
                                            type="p"
                                            text="Place a Bet"
                                            color="#FFF494"
                                            fontSize="20px"
                                            paddingBottom="10px"
                                            fontWeight="bold"
                                        />
                                        <Text
                                            type="p"
                                            text='During the bet, the result is fixed in a special "Random Seed" field. By clicking "Fairness" you can find the current round hash (encrypted winning result) and history of completed bets with all the details.'
                                            paddingBottom="10px"
                                            color="white"
                                            fontSize="12px"
                                            fontWeight="bold"
                                        />
                                        <div
                                            style={{
                                                border: "2px solid #FFC554",
                                                padding: "10px",
                                                textAlign: "center",
                                                borderRadius: "12px",
                                                margin: "20px auto",
                                                // marginTop: "20px",
                                                width: "90%",
                                            }}
                                        >
                                            <Flex
                                                alignItems="flex-start"
                                                gap="20px"
                                            >
                                                <Text
                                                    type="p"
                                                    text="Lucky Number"
                                                    fontWeight="bold"
                                                    paddingTop="15px"
                                                />
                                                <Text
                                                    type="p"
                                                    text="99"
                                                    fontSize={
                                                        isMobile
                                                            ? "50px"
                                                            : "100px"
                                                    }
                                                    fontWeight="bold"
                                                    lineHeight="1"
                                                />
                                            </Flex>
                                            <Button
                                                text="Lets Roll"
                                                background="#4792FF"
                                                width="100%"
                                                padding="20px"
                                                fontSize="19px"
                                                marginTop="20px"
                                            />
                                        </div>
                                    </BgWithText>
                                    <BgWithText
                                        color="#FA3D5F"
                                        isMobile={isMobile}
                                    >
                                        <PrimaryText
                                            color={["#DE97FF", "#FFE279"]}
                                        >
                                            03
                                        </PrimaryText>
                                        <Text
                                            type="p"
                                            text="Check Hash"
                                            color="#FFF494"
                                            fontSize="20px"
                                            paddingBottom="10px"
                                            fontWeight="bold"
                                        />
                                        <Text
                                            type="p"
                                            text='Click "Check". Then in the opened window paste Random Seed you have copied. The issued hash below must match that fixed on BetFury.'
                                            paddingBottom="10px"
                                            color="white"
                                            fontSize="12px"
                                            fontWeight="bold"
                                        />
                                        <div
                                            style={{
                                                border: "2px solid #FFC554",
                                                padding: "10px",
                                                textAlign: "center",
                                                borderRadius: "12px",
                                                margin: "20px auto",
                                                // marginTop: "20px",
                                                width: "90%",
                                            }}
                                        >
                                            <CopyableLink
                                                text="99_3232312313131343321657543433216575434332165754"
                                                addon
                                            />
                                            <Button
                                                text="Check"
                                                background="#4792FF"
                                                width="100%"
                                                padding="20px"
                                                fontSize="19px"
                                                marginTop="20px"
                                            />
                                        </div>
                                    </BgWithText>
                                </Flex>
                                {!isMobile && (
                                    <Button
                                        text="Play"
                                        background="#4792FF"
                                        width="100px"
                                        padding="10px"
                                        fontSize="19px"
                                        marginTop="20px"
                                        borderRadius="15px"
                                    />
                                )}
                                <FrequentlyAsked isMobile={isMobile}>
                                    <Text
                                        type="p"
                                        text="Frequently Asked Questions"
                                        fontSize="28px"
                                        color="white"
                                        fontWeight="bold"
                                    />
                                    {/* <Flex> */}
                                    <Accordion isMobile={isMobile} />
                                    {/* </Flex> */}
                                </FrequentlyAsked>
                            </FairnessContentWrapper>
                        </ImageGridLayout>
                    </FairnessPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default FairnessIndex;
