# Next.js Locale Data Fetching Issue

This repository demonstrates a common error in Next.js applications involving inconsistent data fetching across locales. The problem arises from neglecting to properly handle the locale context within `getStaticProps` or `getServerSideProps`. This can lead to the wrong translations or locale-specific data being displayed, regardless of the user's chosen locale.

## Bug Description

The `bug.js` file showcases a Next.js page that attempts to fetch and display data.  However, it does not take into account the locale during the data fetching process. This results in the same data being used across different locales, making the application inconsistent and potentially displaying wrong information.

## Solution

The `bugSolution.js` file demonstrates the corrected approach. The solution involves using the `locale` parameter provided by Next.js's data fetching methods. This parameter allows the data fetching process to dynamically adapt to the user's preferred locale, ensuring consistent and accurate data rendering for all users.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the application in your browser, and switch between locales to observe the behavior of the bug and the solution.

## License

MIT