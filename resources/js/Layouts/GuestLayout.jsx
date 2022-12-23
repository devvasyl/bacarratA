import Footer from "@/Components/Footer/Footer";
import { styled } from "@mui/system";
import Header from "../Components/Header/Header";
import SimpleSidebar from "../Components/Sidebar/SimpleSidebar";
import LayoutTheme from "./theme";

const PageLayout = styled("div")(({ theme }) => ({
    color: "white",
    backgroundColor: "#000000",
    minHeight: "100vh",
    fontfamily: "Montserrat, sans-serif",
}));

const PageBody = styled("div")(({ theme }) => ({
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingRight: "58px",
    background: "#000000",
}));

export default function GuestLayout({ children }) {
    return (
        <LayoutTheme>
            <PageLayout>
                <Header />
                <PageBody>
                    <SimpleSidebar />
                    {children}
                </PageBody>
                <Footer />
            </PageLayout>
        </LayoutTheme>
    );
}
