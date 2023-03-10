import mapboxgl from 'mapbox-gl';
import { Suspense, lazy } from 'react';

// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Container, CardHeader, CardContent } from '@mui/material';
// routes
import { PATH_PAGE } from '../../../routes/paths';
// config
import { MAPBOX_API } from '../../../config';
// _mock_
import { cities as CITIES } from '../../../_mock/map/cities';
import { countries as COUNTRIES } from '../../../_mock/map/countries';
// components
import Page from '../../../components/Page';
import { SkeletonMap } from '../../../components/skeleton';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';

// sections
const MapHeatmap = lazy(() => import('../../../sections/map/heatmap'));
const MapGeojson = lazy(() => import('../../../sections/map/geojson'));
const MapClusters = lazy(() => import('../../../sections/map/MapClusters'));
const MapInteraction = lazy(() => import('../../../sections/map/interaction'));
const MapChangeTheme = lazy(() => import('../../../sections/map/change-theme'));
const MapZoomToBounds = lazy(() => import('../../../sections/map/MapZoomToBounds'));
const MapMarkersPopups = lazy(() => import('../../../sections/map/MapMarkersPopups'));
const MapDeckglOverlay = lazy(() => import('../../../sections/map/MapDeckglOverlay'));
const MapDynamicStyling = lazy(() => import('../../../sections/map/dynamic-styling'));
const MapDraggableMarkers = lazy(() => import('../../../sections/map/draggable-markers'));
const MapGeoJSONAnimation = lazy(() => import('../../../sections/map/MapGeoJSONAnimation'));
const MapViewportAnimation = lazy(() => import('../../../sections/map/viewport-animation'));
const MapHighlightByFilter = lazy(() => import('../../../sections/map/MapHighlightByFilter'));

// ----------------------------------------------------------------------

// FIX DISPLAY ERROR ON PRODUCTION
// eslint-disable-next-line
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;

const THEMES = {
  streets: 'mapbox://styles/mapbox/streets-v11',
  outdoors: 'mapbox://styles/mapbox/outdoors-v11',
  light: 'mapbox://styles/mapbox/light-v10',
  dark: 'mapbox://styles/mapbox/dark-v10',
  satellite: 'mapbox://styles/mapbox/satellite-v9',
  satelliteStreets: 'mapbox://styles/mapbox/satellite-streets-v11',
};

const baseSettings = {
  mapboxApiAccessToken: MAPBOX_API,
  width: '100%',
  height: '100%',
  minZoom: 1,
};

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

const MapWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right': {
    display: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function Map() {
  return (
    <Page title="Components: Map">
      <RootStyle>
        <Box
          sx={{
            pt: 6,
            pb: 1,
            mb: 10,
            bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
          }}
        >
          <Container maxWidth="lg">
            <HeaderBreadcrumbs
              heading="Map"
              links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Map' }]}
              moreLink={['http://visgl.github.io/react-map-gl', 'https://docs.mapbox.com-js/example']}
            />
          </Container>
        </Box>

        <Container maxWidth="lg">
          <Suspense fallback={<SkeletonMap />}>
            <Stack spacing={5}>
              <Card>
                <CardHeader title="Map Change Theme" />
                <CardContent>
                  <MapWrapperStyle>
                    <MapChangeTheme {...baseSettings} themes={THEMES} />
                  </MapWrapperStyle>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Map Dynamic Styling" />
                <CardContent>
                  <MapWrapperStyle>
                    <MapDynamicStyling {...baseSettings} />
                  </MapWrapperStyle>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Map Markers & Popups" />
                <CardContent>
                  <MapWrapperStyle>
                    <MapMarkersPopups {...baseSettings} data={COUNTRIES} mapStyle={THEMES.light} />
                  </MapWrapperStyle>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Map Draggable Markers" />
                <CardContent>
                  <MapWrapperStyle>
                    <MapDraggableMarkers {...baseSettings} mapStyle={THEMES.light} />
                  </MapWrapperStyle>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Map Geojson" />
                <CardContent>
                  <MapWrapperStyle>
                    <MapGeojson {...baseSettings} mapStyle={THEMES.light} />
                  </MapWrapperStyle>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Map Geojson Animation" />
                <CardContent>
                  <MapWrapperStyle>
                    <MapGeoJSONAnimation {...baseSettings} mapStyle={THEMES.satelliteStreets} />
                  </MapWrapperStyle>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Map Clusters" />
                <CardContent>
                  <MapWrapperStyle>
                    <MapClusters {...baseSettings} mapStyle={THEMES.light} />
                  </MapWrapperStyle>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Map Interaction" />
                <CardContent>
                  <MapWrapperStyle>
                    <MapInteraction {...baseSettings} mapStyle={THEMES.light} />
                  </MapWrapperStyle>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Map Viewport Animation" />
                <CardContent>
                  <MapWrapperStyle>
                    <MapViewportAnimation
                      {...baseSettings}
                      data={CITIES.filter((city) => city.state === 'Texas')}
                      mapStyle={THEMES.light}
                    />
                  </MapWrapperStyle>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Map Highlight By Filter" />
                <CardContent>
                  <MapWrapperStyle>
                    <MapHighlightByFilter {...baseSettings} mapStyle={THEMES.light} />
                  </MapWrapperStyle>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Map Zoom To Bounds" />
                <CardContent>
                  <MapWrapperStyle>
                    <MapZoomToBounds {...baseSettings} />
                  </MapWrapperStyle>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Map Deckgl Overlay" />
                <CardContent>
                  <MapWrapperStyle>
                    <MapDeckglOverlay {...baseSettings} mapStyle={THEMES.light} />
                  </MapWrapperStyle>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Map Heatmap" />
                <CardContent>
                  <MapWrapperStyle>
                    <MapHeatmap {...baseSettings} mapStyle={THEMES.light} />
                  </MapWrapperStyle>
                </CardContent>
              </Card>
            </Stack>
          </Suspense>
        </Container>
      </RootStyle>
    </Page>
  );
}
