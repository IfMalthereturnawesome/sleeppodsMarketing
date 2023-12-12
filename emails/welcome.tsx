import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Button } from "@react-email/button";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL ? `${process.env.VERCEL_URL}` : "";

export const WelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>
      Exciting news about SleepPods - your future sleep companion!
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`/images/logo-sleeppods.png`}
          width="100"
          height="33"
          alt="SleepPods"
          style={logo}
        />
        <Text style={paragraph}>Hello there,</Text>
        <Text style={paragraph}>
          Thank you for your interest in SleepPods! We're thrilled to see that
          you're as excited about revolutionizing sleep as we are. Your request
          for early access has been received, and you're on the list for when we
          launch.
        </Text>
        <Text style={paragraph}>
          Please note, SleepPods is in active development, and features may
          change. The final product might be quite different from what's been
          advertised so far - we're constantly innovating to provide you with
          the best possible experience.
        </Text>
        <Text style={paragraph}>
          While SleepPods isn't available for purchase yet, we'll keep you
          updated on our progress and let you know as soon as pre-orders are
          officially open.
        </Text>
        <Section style={btnContainer}>
          <Button
            pX={12}
            pY={12}
            style={button}
            href="https://www.sleeppods.io"
          >
            Learn More
          </Button>
        </Section>
        <Section style={specialOfferContainer}>
          <Img
            src={`${baseUrl}/images/image5.jpg`}
            alt="Sleep Mask"
            style={specialOfferImage}
          />
          <Text style={specialOfferText}>
            While you wait for SleepPods, experience our revolutionary Sleep
            Mask, designed to enhance your rest today!
          </Text>
          <Button
            pX={12}
            pY={12}
            style={specialOfferButton}
            href="https://www.eightathletics.com/products/sleep-mask-one"
          >
            Get Your Sleep Mask
          </Button>
        </Section>
        <Text style={paragraph}>
          Stay tuned for updates, and thank you for being an early supporter of
          SleepPods.
          <br />
          The SleepPods Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          SleepPods (Eight Athletics ApS), Copenhagen, Denmark
        </Text>
      </Container>
    </Body>
  </Html>
);
export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "start" as const,
  //     padding button
  padding: "10px 0 15px 0",
};

const button = {
  backgroundColor: "#000",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

const specialOfferContainer = {
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  padding: "20px",
  textAlign: "center" as const,
  margin: "20px 0",
};

const specialOfferImage = {
  maxWidth: "100%",
  height: "auto",
  marginBottom: "15px",
};

const specialOfferText = {
  fontSize: "18px",
  lineHeight: "28px",
  color: "#333333",
  marginBottom: "10px",
};

const specialOfferButton = {
  backgroundColor: "#0056b3",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px 30px",
};
