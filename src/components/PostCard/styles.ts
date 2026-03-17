import styled from "styled-components";

export const CardContainer = styled.article`
  background-color: #202024;
  border-radius: 12px;
  padding: 1.25rem;
  border: 1px solid #323238;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #323238;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
    color: #9ca3af;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: #e1e1e6;
`;

export const TimeLabel = styled.span`
  font-size: 0.75rem;
  color: #7c7c8a;
`;

export const ContentText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #c4c4cc;
  white-space: pre-wrap; /* Para manter quebras de linha */
`;

export const PostImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #323238;
`;

export const HashtagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

export const Hashtag = styled.span`
  color: #3b82f6;
  font-size: 0.875rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
