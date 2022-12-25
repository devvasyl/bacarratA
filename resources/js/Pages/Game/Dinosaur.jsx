import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import { styled } from "@mui/system";
import GameLayout from "@/Components/Game/layout/GameLayout";
import DinosaurButtonGrids from "@/Components/Game/buttongrids/DinosaurButtonGrids";
import DinosaurFrames from "@/Components/Game/frames/DinosaurFrames";

const PromotionPageWrapper = styled("div")(() => ({
    background: "#1D2036",
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2rem",
    paddingTop: "2.125rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "2.125rem",
    height: "80%",
    position: "relative",
}));

const Dinosaur = () => {
    return (
        <div>
            <Head title=" Game Dinosaur " />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PromotionPageWrapper>
                        <GameLayout
                            ButtonGrid={DinosaurButtonGrids}
                            GameFrameText={"Crash"}
                            GameFrame={DinosaurFrames}
                        />
                    </PromotionPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </div>
    );
};

export default Dinosaur;
