import {
  Box,
  Divider,
  Flex,
  Grid,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import React from "react";
import HomeSlider from "../Components/Home/HomeSlider";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import NavbarTop from "../Components/Home/NavbarTop";

function HomePage() {
  return (
    <Box bgColor={"#fdfdfd"}>
      {/* <Box bgColor={"black"}>  */}
      <Navbar />
      {/* Yellow Strip */}
      {/* <Box
        height={10}
        backgroundColor="#f89f17"
        color={"white"}
        fontSize={{ base: "80%", sm: "100%", lg: "100%" }}
        display="flex"
        alignItems="center"
        justifyContent={"center"}>
        New arrivals in womenswear upto30% off ❤️
      </Box> */}

      <HomeSlider />

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
        marginTop={{ base: "20px", sm: "30px", md: "30px", lg: "40px" }}
      >
        <Image
          width="100%"
          borderRadius={"20px"}
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip2-14Mar23.jpg"
        />
      </Box>

      {/* Our Benifits */}
      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "100px", sm: "150px", md: "150px", lg: "190px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 2, sm: 3, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Our Benefits
        </Text>

        <Flex marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }} gap="20px">
          <Box>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-22Feb2023.jpg" />
          </Box>

          <Box>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit2-13Oct2022.jpg" />
          </Box>

          <Box display={{ base: "none", sm: "none", md: "block", lg: "block" }}>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg" />
          </Box>
        </Flex>
      </Box>

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
        marginTop={{ base: "20px", sm: "30px", md: "30px", lg: "40px" }}
      >
        <Image
          width="100%"
          borderRadius={"20px"}
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip3-25Mar2023.jpg"
        />
      </Box>

      {/* Seasons hot deals */}
      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "170px", sm: "250px", md: "250px", lg: "330px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Season's Hottest Deals
        </Text>

        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
          marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}
        >
          <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner1-01March23.jpg" />

          <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner4-01March23.jpg" />

          <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner5-01March23.jpg" />

          <Image
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
            src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner8-01March23.jpg"
          />
        </Grid>
      </Box>

      {/* Big brand discount */}

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "190px", sm: "280px", md: "280px", lg: "370px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Big Brands Big Discounts
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap={4}
          marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}
        >
          <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner6-16Mar2023.jpg" />

          <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner2-16Mar2023.jpg" />

          <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner1-09Feb2023.jpg" />

          <Image
            display={{ base: "none", sm: "none", md: "none", lg: "block" }}
            src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner12-31Jan2023.jpg"
          />

          <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner10-14Dec2022.jpg" />

          <Image
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
            src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner11-16Mar2023.jpg"
          />

        </Grid>
      </Box>

      {/* Welcome summer */}
      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "140px", sm: "200px", md: "200px", lg: "270px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Welcome Summer
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
          marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}
        >
          <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner1-14Feb23.jpg" />

          <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner3-14Feb23.jpg" />

          <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner4-14Feb23.jpg" />

          <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner6-14Feb23.jpg" />

        </Grid>
      </Box>

      {/* Brands We Love */}

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
        mb={"30px"}
      >
        <Text
          width={{ base: "190px", sm: "280px", md: "280px", lg: "370px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Big Brands Big Discounts
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap={4}
          marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}
        >
          <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner3-17Mar23.jpg" />

          <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner4-15Mar23.jpg" />

          <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner5-16Mar23.jpg" />

          <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner6-16Mar23.jpg" />

          <Image
            display={{ base: "block", sm: "none", md: "block", lg: "block" }}
            src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner9-24Mar23.jpg"
          />

          <Image
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
            src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner10-20Dec22.jpg"
          />

        </Grid>
      </Box>

      <Divider />
      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Footer />
      </Box>
    </Box>
  );
}

export default HomePage;
