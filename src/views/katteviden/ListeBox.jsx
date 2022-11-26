import { List, Heading, ListItem, ListIcon } from "@chakra-ui/react";
import { ImDiamonds } from "react-icons/im";

function ListeBox({ info }) {
  //remove overskrift and make array
  const makeArr = Object.entries(info).map((e) => {
    if (e[0] !== "list_overskrift") {
      return e[1];
    }
  });

  //clean array
  const cleanList = makeArr.filter((li) => {
    if (li !== undefined || "") return li;
  });
  return (
    <>
      {info.list_overskrift !== "" ? (
        <Heading as={"h2"} size="heading4" mb={"1.1rem"}>
          {info.list_overskrift}
        </Heading>
      ) : null}
      <List fontSize="xxs" spacing={"1rem"} maxW={"70ch"}>
        {cleanList.map((li, index) => (
          <ListItem key={index} display="flex">
            <ListIcon as={ImDiamonds} color="brand.blue" mt={"0.3rem"} />
            {li}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListeBox;
