import { useState } from "react";
import { StyleSheet } from "react-native";
import DataTable, { COL_TYPES } from "react-native-datatable-component";

import Card from "../Card";
import { Text } from "react-native";

const DataTableCard = ({ transactions }) => {
    const totalNoOfRows = transactions?.length;
    const maxRowsPerPage = 5;
    const styledData = transactions?.map((row) => ({
        from: "-",
        ...row,
        doHighlight: { textColor: "white" },
    }));
    const noOfPages = Math.ceil(totalNoOfRows / maxRowsPerPage);

    return (
        <Card style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }}>
            <DataTable
                data={styledData}
                colNames={["from", "to", "amount"]}
                colSettings={[
                    { name: "from", type: COL_TYPES.STRING, width: "40%" },
                    { name: "to", type: COL_TYPES.INT, width: "30%" },
                    { name: "amount", type: COL_TYPES.STRING, width: "30%" },
                ]}
                noOfPages={noOfPages}
                backgroundColor="black"
                headerLabelStyle={{ color: "#496ce9", fontSize: 13 }}
                doSort={false}
            />
        </Card>
    );
};

export default DataTableCard;
