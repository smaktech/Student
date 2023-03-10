import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
// import ProceedToCheckout from '../pages/Courses/PurchaseCourse/ProceedToCheckout';
import CheckoutCart from '../pages/Courses/PurchaseCourse/CheckoutCart';
import Notes from '../pages/Notes/Notes';
import SubTopics from '../pages/LearnTopic/SubTopics';
import PaymentSuccess from '../pages/PaymentSuccess';
import CoursesSubject from '../pages/LearnTopic/CoursesTopics';
import Examination from '../pages/examination/Examination';
import Review from '../pages/review/Review';

import Addeval from '../pages/examination/Addeval';
import Myeval from '../pages/examination/Myeval';
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// components
import LoadingScreen from '../components/LoadingScreen';
import Courses from '../pages/Courses/Courses';
import Resourses from '../pages/Resourses/Resourses';
import Profile from '../pages/Profile/Profile';
import ExaminationTopic from '../pages/examination/ExaminationTopic'
import CoursesVideo from '../pages/CoursesVideo/CoursesVideo';
import ExaminationSubTopics from '../pages/examination/ExaminationSubTopics';
import ExaminationPage from '../pages/ExaminationPage/ExaminationPage';
// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        {
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ), index: true
        },

        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> },

      ],
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to="/dashboard/app" replace />, index: true },
        { path: 'app', element: <GeneralApp /> },
        { path: 'courses', element: <Courses /> },
        { path: 'courses/:activeTab', element: <Courses /> },
        { path: 'examination', element: <Examination /> },
        { path: 'review', element: <Review/> },
        { path: 'review/viewresults/:id', element: <Myeval /> },
        { path: 'examination/Addtest/:id', element: <Addeval /> },

        { path: 'examination/:id/:courseName/:qualificationName/:subjectName/:boardName', element: <ExaminationTopic /> },
        { path: 'examination/subTopics/:topicID/:courseName/:qualificationName/:subjectName/:boardName/:topicName', element: <ExaminationSubTopics /> },
        { path: 'examination/subTopics/learning/:subTopicID/:topicID/:courseName/:qualificationName/:subjectName/:boardName/:topicName/:subTopicName', element: <ExaminationPage /> },

        { path: 'courses/:id/:courseName/:qualificationName/:subjectName/:boardName', element: <CoursesSubject /> },
        { path: 'courses/subTopics/:topicID/:courseName/:qualificationName/:subjectName/:boardName/:topicName', element: <SubTopics /> },
        { path: 'courses/subTopics/learning/:subTopicID/:topicID/:courseName/:qualificationName/:subjectName/:boardName/:topicName/:subTopicName', element: <CoursesVideo /> },
        { path: 'courses/checkout', element: <CheckoutCart /> },
        { path: 'courses/notes/:userId', element: <Notes /> },
        { path: 'resources', element: <Resourses /> },
        { path: 'ecommerce', element: <GeneralEcommerce /> },
        { path: 'analytics', element: <GeneralAnalytics /> },
        { path: 'banking', element: <GeneralBanking /> },
        { path: 'booking', element: <GeneralBooking /> },
        { path: 'payment-success', element: <PaymentSuccess /> },

        {
          path: 'e-commerce',
          children: [
            { element: <Navigate to="/dashboard/e-commerce/shop" replace />, index: true },
            { path: 'shop', element: <EcommerceShop /> },
            { path: 'product/:name', element: <EcommerceProductDetails /> },
            { path: 'list', element: <EcommerceProductList /> },
            { path: 'product/new', element: <EcommerceProductCreate /> },
            { path: 'product/:name/edit', element: <EcommerceProductCreate /> },
            { path: 'checkout', element: <EcommerceCheckout /> },
            { path: 'invoice', element: <EcommerceInvoice /> },
          ],
        },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
            { path: 'profile', element: <UserProfile /> },
            { path: 'cards', element: <UserCards /> },
            { path: 'list', element: <UserList /> },
            { path: 'new', element: <UserCreate /> },
            { path: ':name/edit', element: <UserCreate /> },
            // { path: 'account', element: <UserAccount /> },
            { path: 'account', element: <Profile /> },
          ],
        },
        {
          path: 'blog',
          children: [
            { element: <Navigate to="/dashboard/blog/posts" replace />, index: true },
            { path: 'posts', element: <BlogPosts /> },
            { path: 'post/:title', element: <BlogPost /> },
            { path: 'new-post', element: <BlogNewPost /> },
          ],
        },
        {
          path: 'mail',
          children: [
            { element: <Navigate to="/dashboard/mail/all" replace />, index: true },
            { path: 'label/:customLabel', element: <Mail /> },
            { path: 'label/:customLabel/:mailId', element: <Mail /> },
            { path: ':systemLabel', element: <Mail /> },
            { path: ':systemLabel/:mailId', element: <Mail /> },
          ],
        },
        {
          path: 'chat',
          children: [
            { element: <Chat />, index: true },
            { path: 'new', element: <Chat /> },
            { path: ':conversationKey', element: <Chat /> },
          ],
        },
        { path: 'calendar', element: <Calendar /> },
        { path: 'kanban', element: <Kanban /> },
      ],
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'payment', element: <Payment /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    // {
    //   path: '/',
    //   element: <MainLayout />,
    //   children: [
    //     { element: <HomePage />, index: true },
    //     { path: 'about-us', element: <About /> },
    //     { path: 'contact-us', element: <Contact /> },
    //     { path: 'faqs', element: <Faqs /> },
    //     {
    //       path: 'components',
    //       children: [
    //         { path: '/components', element: <ComponentsOverview /> },
    //         // FOUNDATIONS
    //         { path: 'color', element: <Color /> },
    //         { path: 'typography', element: <Typography /> },
    //         { path: 'shadows', element: <Shadows /> },
    //         { path: 'grid', element: <Grid /> },
    //         { path: 'icons', element: <Icons /> },
    //         // @mui UI
    //         { path: 'accordion', element: <Accordion /> },
    //         { path: 'alert', element: <Alert /> },
    //         { path: 'autocomplete', element: <Autocomplete /> },
    //         { path: 'avatar', element: <Avatar /> },
    //         { path: 'badge', element: <Badge /> },
    //         { path: 'breadcrumbs', element: <Breadcrumb /> },
    //         { path: 'buttons', element: <Buttons /> },
    //         { path: 'checkbox', element: <Checkbox /> },
    //         { path: 'chip', element: <Chip /> },
    //         { path: 'dialog', element: <Dialog /> },
    //         { path: 'label', element: <Label /> },
    //         { path: 'list', element: <List /> },
    //         { path: 'menu', element: <Menu /> },
    //         { path: 'pagination', element: <Pagination /> },
    //         { path: 'pickers', element: <Pickers /> },
    //         { path: 'popover', element: <Popover /> },
    //         { path: 'progress', element: <Progress /> },
    //         { path: 'radio-button', element: <RadioButtons /> },
    //         { path: 'rating', element: <Rating /> },
    //         { path: 'slider', element: <Slider /> },
    //         { path: 'snackbar', element: <Snackbar /> },
    //         { path: 'stepper', element: <Stepper /> },
    //         { path: 'switch', element: <Switches /> },
    //         { path: 'table', element: <Table /> },
    //         { path: 'tabs', element: <Tabs /> },
    //         { path: 'textfield', element: <Textfield /> },
    //         { path: 'timeline', element: <Timeline /> },
    //         { path: 'tooltip', element: <Tooltip /> },
    //         { path: 'transfer-list', element: <TransferList /> },
    //         { path: 'tree-view', element: <TreeView /> },
    //         { path: 'data-grid', element: <DataGrid /> },
    //         // EXTRA COMPONENTS
    //         { path: 'chart', element: <Charts /> },
    //         { path: 'map', element: <Map /> },
    //         { path: 'editor', element: <EditorComponent /> },
    //         { path: 'copy-to-clipboard', element: <CopyToClipboard /> },
    //         { path: 'upload', element: <Upload /> },
    //         { path: 'carousel', element: <Carousel /> },
    //         { path: 'multi-language', element: <MultiLanguage /> },
    //         { path: 'animate', element: <Animate /> },
    //         { path: 'mega-menu', element: <MegaMenu /> },
    //         { path: 'form-validation', element: <FormValidation /> },
    //         { path: 'lightbox', element: <Lightbox /> },
    //         { path: 'image', element: <Image /> },
    //         { path: 'scroll', element: <Scroll /> },
    //         { path: 'text-max-line', element: <TextMax /> },
    //         { path: 'navigation-bar', element: <NavigationBar /> },
    //       ],
    //     },
    //   ],
    // },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/auth/VerifyCode')));
// Dashboard
const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')));
const GeneralEcommerce = Loadable(lazy(() => import('../pages/dashboard/GeneralEcommerce')));
const GeneralAnalytics = Loadable(lazy(() => import('../pages/Analytics/GeneralAnalytics')));
const GeneralBanking = Loadable(lazy(() => import('../pages/dashboard/GeneralBanking')));
const GeneralBooking = Loadable(lazy(() => import('../pages/dashboard/GeneralBooking')));
const EcommerceShop = Loadable(lazy(() => import('../pages/dashboard/EcommerceShop')));
const EcommerceProductDetails = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductDetails')));
const EcommerceProductList = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductList')));
const EcommerceProductCreate = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductCreate')));
const EcommerceCheckout = Loadable(lazy(() => import('../pages/dashboard/EcommerceCheckout')));
const EcommerceInvoice = Loadable(lazy(() => import('../pages/dashboard/EcommerceInvoice')));
const BlogPosts = Loadable(lazy(() => import('../pages/dashboard/BlogPosts')));
const BlogPost = Loadable(lazy(() => import('../pages/dashboard/BlogPost')));
const BlogNewPost = Loadable(lazy(() => import('../pages/dashboard/BlogNewPost')));
const UserProfile = Loadable(lazy(() => import('../pages/dashboard/UserProfile')));
const UserCards = Loadable(lazy(() => import('../pages/dashboard/UserCards')));
const UserList = Loadable(lazy(() => import('../pages/dashboard/UserList')));
const UserAccount = Loadable(lazy(() => import('../pages/dashboard/UserAccount')));
const UserCreate = Loadable(lazy(() => import('../pages/dashboard/UserCreate')));
const Chat = Loadable(lazy(() => import('../pages/dashboard/Chat')));
const Mail = Loadable(lazy(() => import('../pages/dashboard/Mail')));
const Calendar = Loadable(lazy(() => import('../pages/dashboard/Calendar')));
const Kanban = Loadable(lazy(() => import('../pages/dashboard/Kanban')));
// Main
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const About = Loadable(lazy(() => import('../pages/About')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
const Pricing = Loadable(lazy(() => import('../pages/Pricing')));
const Payment = Loadable(lazy(() => import('../pages/Payment')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
// Components
const ComponentsOverview = Loadable(lazy(() => import('../pages/ComponentsOverview')));
const Color = Loadable(lazy(() => import('../pages/overview/foundation/FoundationColors')));
const Typography = Loadable(lazy(() => import('../pages/overview/foundation/FoundationTypography')));
const Shadows = Loadable(lazy(() => import('../pages/overview/foundation/FoundationShadows')));
const Grid = Loadable(lazy(() => import('../pages/overview/foundation/FoundationGrid')));
const Icons = Loadable(lazy(() => import('../pages/overview/foundation/FoundationIcons')));
const Accordion = Loadable(lazy(() => import('../pages/overview/mui/Accordion')));
const Alert = Loadable(lazy(() => import('../pages/overview/mui/Alert')));
const Autocomplete = Loadable(lazy(() => import('../pages/overview/mui/Autocomplete')));
const Avatar = Loadable(lazy(() => import('../pages/overview/mui/Avatar')));
const Badge = Loadable(lazy(() => import('../pages/overview/mui/Badge')));
const Breadcrumb = Loadable(lazy(() => import('../pages/overview/mui/Breadcrumb')));
const Buttons = Loadable(lazy(() => import('../pages/overview/mui/buttons')));
const Checkbox = Loadable(lazy(() => import('../pages/overview/mui/Checkboxes')));
const Chip = Loadable(lazy(() => import('../pages/overview/mui/chips')));
const Dialog = Loadable(lazy(() => import('../pages/overview/mui/dialog')));
const Label = Loadable(lazy(() => import('../pages/overview/mui/Label')));
const List = Loadable(lazy(() => import('../pages/overview/mui/Lists')));
const Menu = Loadable(lazy(() => import('../pages/overview/mui/Menus')));
const Pagination = Loadable(lazy(() => import('../pages/overview/mui/Pagination')));
const Pickers = Loadable(lazy(() => import('../pages/overview/mui/pickers')));
const Popover = Loadable(lazy(() => import('../pages/overview/mui/Popover')));
const Progress = Loadable(lazy(() => import('../pages/overview/mui/progress')));
const RadioButtons = Loadable(lazy(() => import('../pages/overview/mui/RadioButtons')));
const Rating = Loadable(lazy(() => import('../pages/overview/mui/Rating')));
const Slider = Loadable(lazy(() => import('../pages/overview/mui/Slider')));
const Snackbar = Loadable(lazy(() => import('../pages/overview/mui/Snackbar')));
const Stepper = Loadable(lazy(() => import('../pages/overview/mui/stepper')));
const Switches = Loadable(lazy(() => import('../pages/overview/mui/Switches')));
const Table = Loadable(lazy(() => import('../pages/overview/mui/table')));
const Tabs = Loadable(lazy(() => import('../pages/overview/mui/Tabs')));
const Textfield = Loadable(lazy(() => import('../pages/overview/mui/textfield')));
const Timeline = Loadable(lazy(() => import('../pages/overview/mui/Timeline')));
const Tooltip = Loadable(lazy(() => import('../pages/overview/mui/Tooltip')));
const TransferList = Loadable(lazy(() => import('../pages/overview/mui/transfer-list')));
const TreeView = Loadable(lazy(() => import('../pages/overview/mui/TreeView')));
const DataGrid = Loadable(lazy(() => import('../pages/overview/mui/data-grid')));
//
const Charts = Loadable(lazy(() => import('../pages/overview/extra/chart')));
const Map = Loadable(lazy(() => import('../pages/overview/extra/Map')));
const EditorComponent = Loadable(lazy(() => import('../pages/overview/extra/EditorComponent')));
const CopyToClipboard = Loadable(lazy(() => import('../pages/overview/extra/CopyToClipboard')));
const Upload = Loadable(lazy(() => import('../pages/overview/extra/Upload')));
const Carousel = Loadable(lazy(() => import('../pages/overview/extra/carousel')));
const MultiLanguage = Loadable(lazy(() => import('../pages/overview/extra/MultiLanguage')));
const Animate = Loadable(lazy(() => import('../pages/overview/extra/animate')));
const MegaMenu = Loadable(lazy(() => import('../pages/overview/extra/MegaMenu')));
const FormValidation = Loadable(lazy(() => import('../pages/overview/extra/form')));
const Lightbox = Loadable(lazy(() => import('../pages/overview/extra/Lightbox')));
const Image = Loadable(lazy(() => import('../pages/overview/extra/ImageAspectRatio')));
const Scroll = Loadable(lazy(() => import('../pages/overview/extra/Scroll')));
const TextMax = Loadable(lazy(() => import('../pages/overview/extra/TextMax')));
const NavigationBar = Loadable(lazy(() => import('../pages/overview/extra/NavigationBar')));
