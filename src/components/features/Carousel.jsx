import {
  Box,
  chakra,
  Flex,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SplideSlide, Splide, SplideTrack } from "@splidejs/react-splide";
import { BsChevronRight } from "react-icons/bs";
import "@splidejs/react-splide/css";

const SplideChakra = chakra(Splide);
const SplideSlideChakra = chakra(SplideSlide);
const SplideTrackChakra = chakra(SplideTrack);

function Carousel({ CarouselListItem, perPage, perMoveVal, listData }) {
  return (
    <Box>
      <SplideChakra
        hasTrack={false}
        options={{
          perPage: useBreakpointValue(perPage),
          perMove: useBreakpointValue(perMoveVal),
          type: "loop",
          gap: 10,
          pagination: useBreakpointValue({ base: true, lg: false }),
          width: "100%",
          arrows: useBreakpointValue({ base: false, lg: true }),
        }}
      >
        <Box position={"relative"}>
          <Flex
            sx={{ ".splide__arrow > svg": { width: "24px", height: "auto" } }}
            className="splide__arrows"
          >
            <IconButton
              icon={<BsChevronRight width={"10rem"} height={"10rem"} />}
              className="splide__arrow splide__arrow--prev"
              aria-label="prev"
              transform="none"
              variant={"carouselBtn"}
              position={"absolute"}
              left={"-10%"}
              top={"45%"}
            />
            <IconButton
              icon={<BsChevronRight />}
              className="splide__arrow splide__arrow--next"
              aria-label="next"
              transform="none"
              variant={"carouselBtn"}
              position={"absolute"}
              right={"-10%"}
              top={"45%"}
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
