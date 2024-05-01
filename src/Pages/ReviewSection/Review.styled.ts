import styled from 'styled-components';

interface StarProps {
    filled: boolean;
}

 const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
`;

 const Title = styled.h2`
  margin-bottom: 1rem;
     font-weight: 600;
     font-size: 36px;
`;

 const ReviewContainer = styled.div`
  width: 100%;
  //max-width: 800px;
  display: flex;
  flex-direction: row;
     text-align: justify-all;
  gap: 1rem;
`;

 const Review = styled.div`
  background: none;
  padding: 1rem;
  border-radius: 4px;
`;

 const ReviewText = styled.p`
  margin-bottom: 0.5rem;
     font-size: 16px;
`;

 const ReviewAuthor = styled.span`
font-size: 20px;`;

 const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;

 const Star = styled.span <StarProps> `
  color: ${props => (props.filled ? 'black' : 'lightgray')};
     font-size : 36px;
`;
export { Container , Title,ReviewContainer , Review , ReviewAuthor , Star , ReviewText , Rating  }