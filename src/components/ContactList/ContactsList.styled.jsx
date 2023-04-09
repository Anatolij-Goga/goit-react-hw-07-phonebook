import styled from '@emotion/styled';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const ContactUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  border-radius: 4px;
  background-image: linear-gradient(to right, #553c9a 45%, #ee4b2b);
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

const EmptyContactText = styled.p`
  margin-bottom: 30px;
  color: white;
`;

export { ContactWrapper, ContactUl, ContactItem, EmptyContactText };
