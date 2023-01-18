import ImageGridLayout from "@/Components/ImageGrid/ImageGridLayout";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { getMe, setProfile } from "@/redux/profile/profileSlice";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import centerIcon from "../../../../public/images/user/userIcon.svg";
import historyIcon from '../../../../public/images/svg/historyIcon.svg';
import Text from "@/Components/Text/Text";
import { Flex } from "@/Components/UtilComponents/Flex";
const HistoryPageWrapper = styled("div")(({ isMobile }) => ({
    margin: "0 auto",
    paddingTop: "2.125rem",
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 100,
}));

const HistoryWrapper = styled("div")(({ isMobile }) => ({
    background: "linear-gradient(119.77deg, #272C56 2.99%, #444AC7 100%)",
    borderRadius: '10px',
    margin: isMobile ? "60px 0 0" : "70px 0",
    position: "relative",
    zIndex: 300,
    padding: '20px',
}));

const HistoryPage = () => {
    const { isMobile } = useScreenResolution();
    const dispatcher = useDispatch();

    const [currentTab, setCurrentTab] = useState("game");

    return (
        <>
            <Head title="Personal Center" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <HistoryPageWrapper>
                        <ImageGridLayout
                            item={{
                                title: "Personal Center",
                                icon: centerIcon,
                                margin: "10px",
                            }}
                            index={0}
                            page="personal-center"
                        >
                            <HistoryWrapper isMobile={isMobile}>
                                <Flex alignItems='center' gap='10px'>
                                    <img src={historyIcon} alt="historyIcon" />
                                    <Text type='p' text={currentTab + ' History'} fontSize="1rem" fontWeight='bold' color="#fff" textTransform='capitalize'/>
                                </Flex>

                                
                            </HistoryWrapper>
                        </ImageGridLayout>
                    </HistoryPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default HistoryPage;
