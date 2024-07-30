/** @format */

"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import { useEffect, useRef } from "react";
import { Chart, ChartType } from "chart.js/auto";
import { NextPage } from "next";

const Statistic: NextPage = () => {
  const chartRef1 = useRef<Chart | null>(null);
  const chartRef2 = useRef<Chart | any>(null);

  useEffect(() => {
    const data = [
      { no: 1, count: 12 },
      { no: 2, count: 20 },
      { no: 3, count: 15 },
      { no: 4, count: 25 },
      { no: 5, count: 22 },
      { no: 6, count: 30 },
      { no: 7, count: 28 },
      { no: 8, count: 28 },
      { no: 9, count: 28 },
      { no: 10, count: 28 },
      { no: 11, count: 30 },
      { no: 12, count: 28 },
    ];

    const createBarChart = (
      ctx: CanvasRenderingContext2D | HTMLCanvasElement,
      data: any,
      options: any
    ) => {
      return new Chart(ctx, {
        type: "bar",
        data,
        options,
        plugins: [],
      });
    };

    const createDoughnutChart = (
      ctx: CanvasRenderingContext2D | HTMLCanvasElement,
      data: any,
      options: any
    ) => {
      return new Chart(ctx, {
        type: "doughnut",
        data,
        options,
        plugins: [
          {
            id: "centerText",
            beforeDraw: function (chart) {
              const ctx = chart.ctx;
              const width = chart.width;
              const height = chart.height;
              const text1 = "23 wins";
              const text2 = "75%";
              const marginTop = 5;

              ctx.restore();
              let fontSize = (height / 114).toFixed(2);
              ctx.font = `bold ${fontSize}em sans-serif`;
              ctx.textBaseline = "middle";
              ctx.fillStyle = "black";

              const text1X = Math.round(
                (width - ctx.measureText(text1).width) / 2
              );
              const text1Y = height / 2 - 10;

              ctx.fillText(text1, text1X, text1Y);

              fontSize = (height / 200).toFixed(2);
              ctx.font = `${fontSize}em sans-serif`;
              ctx.fillStyle = "rgba(0,0,0,0.2)"; // Light color for 75%
              const text2X = Math.round(
                (width - ctx.measureText(text2).width) / 2
              );
              const text2Y = text1Y + marginTop + 30;

              ctx.fillText(text2, text2X, text2Y);
              ctx.save();
            },
          },
        ],
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

    if (ctx1) {
      const ctx1Canvas = ctx1.getContext("2d");

      if (ctx1Canvas) {
        const createGradient = (index: number) => {
          const gradient = ctx1Canvas.createLinearGradient(0, 0, 0, 200);
          const colors = [
            ["rgba(75,192,192,1)", "rgba(255,99,132,1)"],
            ["rgba(54,162,235,1)", "rgba(255,206,86,1)"],
            ["rgba(153,102,255,1)", "rgba(255,159,64,1)"],
            ["rgba(255,99,132,1)", "rgba(75,192,192,1)"],
            ["rgba(255,159,64,1)", "rgba(153,102,255,1)"],
            ["rgba(255,206,86,1)", "rgba(54,162,235,1)"],
            ["rgba(75,192,192,1)", "rgba(153,102,255,1)"],
            ["rgba(54,162,235,1)", "rgba(255,99,132,1)"],
            ["rgba(255,159,64,1)", "rgba(75,192,192,1)"],
            ["rgba(255,206,86,1)", "rgba(153,102,255,1)"],
            ["rgba(255,99,132,1)", "rgba(54,162,235,1)"],
            ["rgba(153,102,255,1)", "rgba(255,206,86,1)"],
          ];
          const [color1, color2] = colors[index % colors.length];
          gradient.addColorStop(0, color1);
          gradient.addColorStop(1, color2);
          return gradient;
        };

        chartRef1.current = createBarChart(
          ctx1,
          {
            labels: data.map((row) => ` ${row.no}`),
            datasets: [
              {
                data: data.map((row) => row.count),
                backgroundColor: data.map((_, index) => createGradient(index)),
                borderWidth: 1,
                barThickness: 8,
                borderRadius: 8,
              },
            ],
          },
          {
            scales: {
              x: {
                beginAtZero: true,
                ticks: {
                  autoSkip: false,
                },
              },
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 10,
                  max: 30,
                },
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
          }
        );
      }
    }

    if (ctx2) {
      const ctx2Canvas = ctx2.getContext("2d");

      if (ctx2Canvas) {
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

        chartRef2.current = createDoughnutChart(
          ctx2Canvas,
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
        <Flex direction='row' height='55vh' gap={4}>
          <Box
            flex='1'
            bg='white'
            borderRadius='50px'
            padding={4}
            height='55vh'
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
            <Box height='370px' marginTop={"25px"} padding={5}>
              <canvas id='acquisitions'></canvas>
            </Box>
          </Box>
          <Box
            flex='1'
            bg='white'
            borderRadius='50px'
            padding={4}
            height='55vh'
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
