# Local Setup

```
    * git clone
    * npm install --legacy-peer-deps
    * npm start
    * Scan QR displayed in CLI in Expo app
```

# Screens

-   Login - Enter any address and login. Currenty dummy balance and transactions are created for the user since the APIs are not working and hence have not been integrated. Once a user is logged in, restarting the app takes the user directly to the Dashboard screen, until the user logs out.
-   Dashboard - Displays the balance of the address, number of transactions, graph of the last 6 transactions and a data table displaying the transaction details
-   Send - This is screen contains 2 inputs, amount and user's address to whom the Jobcoins need to be sent. Clicking on the send button, redirects the user to the dashboard screen with the updated balance, transaction count, graph and transaction table.

# Libraries Used

-   faker-js - To generate dummy data of the address. Used since the APIs are not working and hence have not been integrated.
-   @react-native-async-storage/async-storage - To persist user's address and data across app reloads. Incase api is integrated, only the user's address would need to be stored.
-   react-navigation - For navigation, stack & bottom tab navigators have been used.
-   expo-navigation-bar - To change the navigation bar color to match the color scheme of the app
-   react-native-chart-kit - To display line chart containing the latest transactions
-   react-native-datatable-component - Used to display the datatable, contaning the transaction details
-   styled-components - Styling for some of the components have been done using styled-components. This can be replaced using StyleSheets.

# Known Issues

-   Table Pagination - The pagination icons on the table are not visible, since the library "react-native-datatable-component" does not provide support to change the pagination icon colors. While I have changed the icons inside the library to white, it will need to be done everytime the package is installed or change the icon in the package to an svg one and provide color support to the library user.
-   Table Rows per page - There is no option in the library "react-native-datatable-component" to specify number of rows per page. This is calculated by the library automatically and is unreliable. For ex: incase 8 records are present, 3 will be shown in the 1st page and 5 in the 2nd page
-   Incase a user is logged in and the application is restarted, the login page is displayed for 1-3 seconds after which the user is redirected to the Dashboard screen. This issue is due to the async time taken to read from app's storage and can be resolved by implementing a splash screen.

# Improvements

-   Colors used in the code can be imported from a theme file
-   Splash screen
-   Single Transaction Screen - When clicking on a particular transaction on the table, the user can be redirected to a screen that displays more information about that transaction.
-
