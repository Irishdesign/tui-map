import {
  Map,
  MapMarker,
  MapPolyline,
  PageContainer,
  height,
} from "@tourlane/tourlane-ui";
import styled from "styled-components";

function App() {
  const GOOGLE_MAP_API_KEY = "AIzaSyAIy4Paa44QA0130pL0Ulov2K-H0V7xmM0";
  const StyledJourneyMap = styled(Map)`
    ${height({ xs: 443, sm: 564, md: 592, lg: 558, xl: 600 })}
  `;

  const path = [
    { lat: -35.183748, lng: 150.444637 },
    { lat: -35.120773, lng: 150.674294 },
    { lat: -34.715698, lng: 150.528164 },
    { lat: -34.397, lng: 150.644 },
    { lat: -34.398354, lng: 150.900172 },
  ];
  const markers = [path[0], path[2], path[3], path[4]];
  const start = { lat: -35.358935, lng: 150.471194 };
  const end = { lat: -34.196154, lng: 151.022811 };

  const paths = [
    path,
    [
      { lat: -34.695197, lng: 150.295211 },
      { lat: -34.7266, lng: 150.0579 },
      { lat: -34.646212, lng: 149.948418 },
      { lat: -34.5303, lng: 150.136841 },
      { lat: -34.678813, lng: 150.372808 },
      { lat: -34.568653, lng: 150.315109 },
    ],
    [
      { lat: -35.335995, lng: 150.424851 },
      { lat: -35.531019, lng: 150.401693 },
      { lat: -35.729474, lng: 150.198844 },
      { lat: -36.073975, lng: 150.150207 },
      { lat: -36.272767, lng: 150.123319 },
    ],
    [
      { lat: -35.369004, lng: 149.235126 },
      { lat: -35.431981, lng: 149.144846 },
      { lat: -35.210979, lng: 149.208093 },
      { lat: -35.321319, lng: 149.124652 },
      { lat: -35.217752, lng: 149.084753 },
    ],
  ];

  return (
    <PageContainer>
      <StyledJourneyMap apiKey={GOOGLE_MAP_API_KEY} center={path[2]} zoom={10}>
        <MapPolyline path={path} />
        <MapMarker position={path[0]} type={"marker"} label={"1"} />
        <MapMarker position={path[4]} type={"marker"} label={"2"} />
      </StyledJourneyMap>
    </PageContainer>
  );
}

export default App;
