/** @format */
import { Box, Flex, Text } from "@chakra-ui/react";
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import { useEffect, useRef } from "react";
import { Chart, ChartType, ChartConfiguration } from "chart.js/auto";
import { NextPage } from "next";

const Statistic: NextPage = () => {
  const chartRef1 = useRef<Chart | null>(null);
  const chartRef2 = useRef<Chart | null>(null);

  useEffect(() => {
    const data = [
      { no: 1, count: 10 },
      { no: 2, count: 20 },
      { no: 3, count: 15 },
      { no: 4, count: 25 },
      { no: 5, count: 22 },
      { no: 6, count: 30 },
      { no: 7, count: 28 },
      { no: 8, count: 28 },
      { no: 9, count: 28 },
      { no: 10, count: 28 },
      { no: 11, count: 50 },
      { no: 12, count: 28 },
    ];

    const createChart = (
      ctx: CanvasRenderingContext2D | HTMLCanvasElement,
      type: ChartType,
      data: any,
      options: any
    ) => {
      return new Chart(ctx, {
        type,
        data,
        options,
      });
    };

    const destroyChart = (chart: Chart | null) => {
      if (chart) {
        chart.destroy();
      }
    };

    const ctx1 = document.getElementById("acquisitions") as HTMLCanvasElement;
    const ctx2 = document.getElementById("sales") as HTMLCanvasElement;

    destroyChart(chartRef1.current);
    destroyChart(chartRef2.current);

    chartRef1.current = createChart(
      ctx1,
      "bar",
      {
        labels: data.map((row) => row.no),
        datasets: [
          {
            data: data.map((row) => row.count),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      {
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              min: 1,
              max: 12,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              max: 50,
            },
          },
        },
      }
    );

    if (ctx2) {
      const ctx2Canvas = ctx2.getContext("2d");

      if (ctx2Canvas) {
        // Create gradients
        const gradient1 = ctx2Canvas.createRadialGradient(
          200,
          200,
          50,
          200,
          200,
          200
        );
        gradient1.addColorStop(0, "rgba(206,159,252,1)");
        gradient1.addColorStop(1, "rgba(115,103,240,1)");

        const gradient2 = ctx2Canvas.createRadialGradient(
          200,
          200,
          50,
          200,
          200,
          200
        );
        gradient2.addColorStop(0, "rgba(255,246,183,1)");
        gradient2.addColorStop(1, "rgba(246,65,108,1)");

        const gradient3 = ctx2Canvas.createRadialGradient(
          200,
          200,
          50,
          200,
          200,
          200
        );
        gradient3.addColorStop(0, "rgba(255,233,133,1)");
        gradient3.addColorStop(1, "rgba(250,116,43,1)");

        chartRef2.current = createChart(
          ctx2Canvas,
          "doughnut",
          {
            datasets: [
              {
                label: "Statistics",
                data: [80, 50, 60, 50],
                backgroundColor: [
                  gradient1,
                  gradient2,
                  gradient3,
                  "rgba(0,0,0,0.2)",
                ],
                hoverBackgroundColor: [
                  gradient1,
                  gradient2,
                  gradient3,
                  "rgba(0,0,0,0.2)",
                ],
              },
            ],
          },
          {
            cutout: "75%",
          }
        );
      }
    }

    return () => {
      destroyChart(chartRef1.current);
      destroyChart(chartRef2.current);
    };
  }, []);

  return (
    <>
      <Flex direction='column' height='100vh' gap={4}>
        <Flex direction='row' height='50vh' gap={4}>
          <Box
            flex='1'
            bg='white'
            borderRadius='50px'
            padding={4}
            height='50vh'
          >
            <Text
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
              fontSize={"25px"}
              gap={5}
              fontWeight={600}
              mt={5}
            >
              <HiArrowLongLeft />
              2019
              <HiOutlineArrowLongRight />
            </Text>
            <Box height='500px'>
              <canvas id='acquisitions'></canvas>
            </Box>
          </Box>
          <Box
            flex='1'
            bg='white'
            borderRadius='50px'
            padding={4}
            height='50vh'
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Text
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={"25px"}
              gap={5}
              fontWeight={600}
              mt={5}
            >
              Global Statistic
            </Text>
            <Box height='250px'>
              <canvas id='sales'></canvas>
            </Box>
            <Box
              w={"60%"}
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Box
                h={5}
                w={5}
                bgGradient={
                  "radial-gradient(circle, rgba(206,159,252,1) 0%, rgba(115,103,240,1) 100%);"
                }
              ></Box>
              <Box
                h={5}
                w={5}
                bgGradient={
                  "radial-gradient(circle, rgba(255,246,183,1) 0%, rgba(246,65,108,1) 100%);"
                }
              ></Box>
              <Box
                h={5}
                w={5}
                bgGradient={
                  "radial-gradient(circle, rgba(255,233,133,1) 0%, rgba(250,116,43,1) 100%);"
                }
              ></Box>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Statistic;
