import { useState } from "react";
import { View, Dimensions, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Rect } from "react-native-svg";

import Card from "../Card";

const ChartCard = ({ transactions }) => {
    let [tooltipPos, setTooltipPos] = useState({
        x: 0,
        y: 0,
        visible: false,
        value: 0,
    });

    const firxtXTransactions = transactions.slice(0, 6);
    const transactionDates = firxtXTransactions.map((transaction) =>
        new Date(transaction.datetime).toLocaleDateString("en", {
            month: "numeric",
            year: "2-digit",
            day: "numeric",
        })
    );
    const transactionsAmount = firxtXTransactions.map((transaction) => transaction.amount);

    return (
        <View>
            <Card style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }}>
                <LineChart
                    data={{
                        labels: transactionDates,
                        datasets: [
                            {
                                data: transactionsAmount,
                                color: () => `rgba(134, 65, 244, ${0.6})`,
                                strokeWidth: 2,
                            },
                        ],
                        legend: ["JobCoins"],
                    }}
                    width={Dimensions.get("window").width * 0.8}
                    height={220}
                    style={{ position: "relative" }}
                    chartConfig={{
                        color: () => "#496ce9",
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        propsForVerticalLabels: {
                            fontSize: 8,
                        },
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726",
                        },
                    }}
                    decorator={() => {
                        return tooltipPos.visible ? (
                            <View
                                style={{
                                    position: "absolute",
                                    left: tooltipPos.x - 15,
                                    top: tooltipPos.y + 5,
                                }}
                            >
                                <Rect
                                    x={tooltipPos.x - 15}
                                    y={tooltipPos.y + 10}
                                    width="40"
                                    height="30"
                                    fill="white"
                                />
                                <Text style={{ color: "white" }}>{tooltipPos.value}</Text>
                            </View>
                        ) : null;
                    }}
                    onDataPointClick={(data) => {
                        let isSamePoint = tooltipPos.x === data.x && tooltipPos.y === data.y;
                        isSamePoint
                            ? setTooltipPos((previousState) => {
                                  return {
                                      ...previousState,
                                      value: data.value,
                                      visible: !previousState.visible,
                                  };
                              })
                            : setTooltipPos({
                                  x: data.x,
                                  value: data.value,
                                  y: data.y,
                                  visible: true,
                              });
                    }}
                />
            </Card>
        </View>
    );
};

export default ChartCard;
