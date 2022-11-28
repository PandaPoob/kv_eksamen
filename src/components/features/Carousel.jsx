import {
  Box,
  chakra,
  Flex,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SplideSlide, Splide, SplideTrack } from "@splidejs/react-splide";
import { BsChevronRight, BsArrowRight } from "react-icons/bs";
import "@splidejs/react-splide/css";

const SplideChakra = chakra(Splide);
const SplideSlideChakra = chakra(SplideSlide);
const SplideTrackChakra = chakra(SplideTrack);

function Carousel({
  CarouselListItem,
  perPage,
  perMoveVal,
  listData,
  customP,
  pos,
}) {
  return (
    <Box justifyContent={pos}>
      <SplideChakra
        hasTrack={false}
        options={{
          perPage: useBreakpointValue(perPage),
          perMove: useBreakpointValue(perMoveVal),
          padding: customP,
          type: "loop",
          gap: 10,
          pagination: useBreakpointValue({ base: true, lg: false }),
          width: "100%",
          arrows: useBreakpointValue({ base: false, lg: true }),
        }}
      >
        <Box position={"relative"}>
          <Flex
            sx={{ ".splide__arrow > svg": { width: "28px", height: "auto" } }}
            className="splide__arrows"
            alignItems="center"
            justifyContent={"flex-end"}
          >
            <IconButton
              icon={<BsArrowRight />}
              className="splide__arrow splide__arrow--prev"
              aria-label="prev"
              transform="none"
              variant={"carouselBtn"}
            />
            <IconButton
              icon={<BsArrowRight />}
              className="splide__arrow splide__arrow--next"
              aria-label="next"
              transform="none"
              variant={"carouselBtn"}
              right={-4}
            />
          </Flex>

          <SplideTrackChakra transform={"none"}>
            {listData.map((item, index) => (
              <SplideSlideChakra key={index}>
                <CarouselListItem {...item}></CarouselListItem>
              </SplideSlideChakra>
            ))}
          </SplideTrackChakra>
        </Box>
      </SplideChakra>
    </Box>
  );
}

export default Carousel;
