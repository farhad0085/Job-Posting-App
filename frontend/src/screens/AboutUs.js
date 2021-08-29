import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Title, useTheme, Text } from "react-native-paper";

const AboutUs = ({ navigation }) => {
  const theme = useTheme();
  const styles = getStyles(theme)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text>
            ছড়িয়ে ছিটিয়ে থাকা বিভিন্ন গুরুত্বপূর্ণ তথ্য সংগ্রহ করে তা প্রচার করে
            সবার উপকার সাধন ই আমাদের উদ্দ্যেশ্য। আমরা সর্বোচ্ছ চেষ্টা করি
            অথেনটিক সোর্স থেকে তথ্য সংগ্রহ করার এবং ভুয়া তথ্য এড়িয়ে চলার চেষ্টা
            অব্যাহত রয়েছে।
          </Text>
          <Text>
            আমাদের সাথেই থাকুন। প্রতিদিন চেক করুন আপনার বিডি বক্স। বন্ধুদের সাথে
            শেয়ার করে নিন।
          </Text>
          <Text style={{ textAlign: "right" }}>---- টিম বিডি বক্স</Text>

          <Title>DISCLAIMER</Title>
          <Text>
            All information in our mobile application is provided in good faith,
            however we make no representation or warranty of any kind, express
            or implied, regarding the accuracy, adequacy, validity, reliability,
            availability or completeness of any information in our application.
            The information provided by our app is for general informational
            purposes only.
          </Text>
          <Text style={{ fontWeight: "bold" }}>
            UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY
            LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE
            SITE OR OUR MOBILE APPLICATION OR RELIANCE ON ANY INFORMATION
            PROVIDED ON THE SITE AND OUR MOBILE APPLICATION. YOUR USE OF THE
            SITE AND OUR MOBILE APPLICATION AND YOUR RELIANCE ON ANY INFORMATION
            ON THE SITE AND OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.
          </Text>
          <Title>CONTENT AND POSTINGS</Title>
          <Text>
            You may not modify, print or copy any part of the Mobile Application
            and Services. Inclusion of any part of the Mobile Application and
            Services in another work, whether in printed or electronic or
            another form or inclusion of any part of the Mobile Application and
            Services on another resource by embedding, framing or otherwise
            without the express permission of the Operator is prohibited. You
            may submit new content in the Mobile Application. By uploading or
            otherwise making available any information to the Operator, you
            grant the Operator the unlimited, perpetual right to distribute,
            display, publish, reproduce, reuse and copy the information
            contained therein. You may not impersonate any other person through
            the Mobile Application and Services. You may not post content that
            is defamatory, fraudulent, obscene, threatening, invasive of another
            person's privacy rights or that is otherwise unlawful. You may not
            post content that infringes on the intellectual property rights of
            any other person or entity. You may not post any content that
            includes any computer virus or other code designed to disrupt,
            damage, or limit the functioning of any computer software or
            hardware.
          </Text>
          <Title>EXTERNAL LINKS DISCLAIMER</Title>
          <Text>
            The Site and our mobile application may contain (or you may be sent
            through the Site or our mobile application) links to other websites
            or content belonging to or originating from third parties or links
            to websites and features in banners or other advertising. Such
            external links are not investigated, monitored, or checked for
            accuracy, adequacy, validity, reliability, availability or
            completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
            RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION
            OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY
            WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE
            WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING
            ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR
            SERVICES. We do not represent the government entity and are not
            affiliated with any government entity. This app does not represent
            any government or political entity. Information relating to
            government can be found here at- https://bangladesh.gov.bd Any views
            or opinions represented in the Mobile Application belong solely to
            the content creators and do not represent those of people,
            institutions or organizations that the Operator or creators may or
            may not be associated with in professional or personal capacity,
            unless explicitly stated. Any views or opinions are not intended to
            malign any religion, ethnic group, club, organization, company, or
            individual.
          </Text>
          <Title>NO RESPONSIBILITY DISCLAIMER</Title>
          <Text>
            The information on the Service is provided with the understanding
            that the Company is not herein engaged in rendering legal,
            accounting, tax, or other professional advice and services. As such,
            it should not be used as a substitute for consultation with
            professional accounting, tax, legal or other competent advisers. In
            no event shall the Company or its suppliers be liable for any
            special, incidental, indirect, or consequential damages whatsoever
            arising out of or in connection with your access or use or inability
            to access or use the Service.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;

const getStyles = theme => StyleSheet.create({
  container: {
    margin: 5,
    marginBottom: 30,
  },
  mainView: {
    display: "flex",
    backgroundColor: theme.colors.background,
  },
});
