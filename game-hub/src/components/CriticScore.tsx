import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({score}: Props) => {

let color = score > 90 ? 'green' : score > 80 ? 'yellow' : '';
  return (
        <Badge colorScheme={color} fontSize='14px' paddingX={4} borderRadius={7} >{score}</Badge>
  )
}

export default CriticScore
