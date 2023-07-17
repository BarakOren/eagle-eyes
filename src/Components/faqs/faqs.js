import styled from "styled-components"
import Faq from "react-faq-component";

const data = {
    title: "FAQs",
    rows: [
        {
            title: "What is unique about desert safari Price in Dubai?",
            content: `An exciting night in Dubai’s desert includes rough camel rides, wildlife-watching, a dance show with barbeque, sandboarding, and traditional costumes. Desert Safari Price Dubai offer varied experiences and fascinating activities all day.`,
        },
        {
            title: "What is the best time for desert safari?",
            content:
                "Timings for desert safari in the morning are 8 am to 11 am and evening timings are 4 pm to 9 pm.",
        },
        {
            title: "What shoes should I wear in desert?",
            content: `Bring along comfy, closed shoes with a decent grip. This is our yearly recommendation for footwear. Shoes for walking and sneakers are both acceptable. This also works for people who adore their mountain booths.`,
        },
        {
            title: "What activities are included in the desert safari price Dubai?",
            content: `The activities included in the desert safari price Dubai can vary depending on the package, but some common activities include dune bashing, camel riding, sandboarding, henna painting, and a BBQ dinner.`,
        },
        {
            title: "Are there any additional charges I should be aware of when booking a desert safari in Dubai?",
            content: `Some tour operators may have additional charges for certain activities such as quad biking or alcoholic beverages. It’s important to check with the tour operator beforehand to avoid any surprises.`,
        },
    ],
};

const data2 = {
    rows: [
        {
            title: "Are there any additional charges I should be aware of when booking a desert safari in Dubai?",
            content: `Some tour operators may have additional charges for certain activities such as quad biking or alcoholic beverages. It’s important to check with the tour operator beforehand to avoid any surprises.`,
        },
        {
            title: "How long does desert safari last?",
            content: `The trip takes approximately five to six hours. Our Desert Safari deals driver will take you up from your hotel at approximately 6:00 pm and return you home securely by 9:00 pm.`,
        },
        {
            title: "How long does desert safari last?",
            content: `The trip takes approximately five to six hours. Our Desert Safari deals driver will take you up from your hotel at approximately 6:00 pm and return you home securely by 9:00 pm.`,
        },
        {
            title: "Is there a special price for big groups?",
            content: `Absolutely! Please contact us to get prices for groups.`,
        },
    ],
};

const styles = {
    bgColor: 'none',
    titleTextColor: "rgb(39, 32, 83)",
    rowTitleTextSize: '18px',
    rowTitleColor: "rgb(39, 32, 83)",
    rowContentColor: 'rgb(39, 32, 83)',
    rowContentTextSize: '16px',
    arrowColor: "rgb(39, 32, 83)",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};


const Container = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0 50px;
    color: rgb(39, 32, 83);
`


const Faqs = () => {

    return <Container>
        <Faq
            data={data}
            styles={styles}
            config={config}
        />
        <div style={{marginTop: '20px'}}>
        <Faq 
        data={data2}
        styles={styles}
        config={config}
        />
        </div>
       
    </Container>

}

export default Faqs