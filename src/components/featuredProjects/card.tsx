import { Fade } from "react-awesome-reveal";
import { Card as AntdCard, Tag } from "antd";
import styled from "styled-components";

const StyledCard = styled(AntdCard)`
    // background: darkgray;
    font-family: inherit;


    border-width: 5px;
    border-color: #2F1B5B;
    border-radius: 50px;

    
    .cardTitle {
        text-align: left;
        font-size: 25px;
        font-weight: bold;
    }
    margin-bottom: 20px;
    // margin: 20px;
    overflow: hidden;


`;

const CardDescription = styled.div`
    font-size: 16px;
    text-align: left;
`;

const StyledTag = styled(Tag)`
    font-size: 16px;
    color: white;
    text-shadow: 0px 0px 3px black;
    background-color: #c1bfdf;
    padding: 5px 10px 5px 10px;
    font-family: inherit;
    border-shadow: 0px 0px 2px black;
    margin-top: 10px
`;

const ProjectDates = styled.div`
    font-weight: bold;
    font-style: italic;
`;

export interface CardProps {
    title: string,
    dates: string,
    cover: React.ReactNode,
    description: string,
    tags: string[],
    actions?: React.ReactNode[];
};

const Card: React.FC<CardProps> = ({title, dates, cover, description, tags, actions}) => {
    return (
        <Fade fraction={0.1}cascade damping={0.05}>
            <StyledCard
                hoverable
                cover={cover} 
                actions={actions}
            >
                <div className="cardTitle">{title}</div>
                <CardDescription>
                    <ProjectDates>{dates}</ProjectDates>
                    {description}
                    <br /> 
                    {
                        tags.map((tag) => {
                            return (
                            <StyledTag bordered={false} key={tag}>{tag}</StyledTag>
                            )
                        })
                    }
                </CardDescription>
            </StyledCard>
        </Fade>
    )
}

export default Card;