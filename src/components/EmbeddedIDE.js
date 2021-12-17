function EmbeddedIDE(props) {
    const defaultStyle = { width: "100%", height: "100%", border: "none" };

    return (
        <iframe src={props.embedURL}
            style={props.customIFrameStyle || defaultStyle}
            title="embedded IDE"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
    )
}

export default EmbeddedIDE