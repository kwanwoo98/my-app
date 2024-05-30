import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifycontent: "center",
    },
    titleText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};


function Board(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://i.namu.wiki/i/yL0sNeWMBC8vDbDI4DzmWK0bs1C6lzhZvTXCaxi9oUSYeBf-FjLlcKtfpuEJ_GFahWFowLJxjBc6Ye78mgQ1hA.webp"
                    style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.titleText}>{props.title}</span>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
                <span style={styles.commentText}>{props.date}</span>
            </div >
        </div >
    );
}
export default Board;