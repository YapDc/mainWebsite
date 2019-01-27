import React from 'react'

const getViewBox = name => {
  switch (name) {
    case 'twitter':
      return '0 0 21 17'
    case 'facebook':
      return '0 0 24 24'
    case 'instagram':
      return '0 0 24 24'
    case 'linkedin':
      return '0 0 19 19'
    default:
      return '0 0 32 32'
  }
}

const getPath = (name, props) => {
  switch (name) {
    case 'twitter':
      return (
        <path
          {...props}
          d="M0.574245 15.1565C2.3701 16.3043 4.50038 16.9685 6.78395 16.9685C13.1994 16.9685 18.3999 11.7273 18.3999 5.26314C18.3999 5.10175 18.3965 4.94154 18.3903 4.78181C18.6224 4.5978 20.0575 3.43866 20.4093 2.69349C20.4093 2.69349 19.2439 3.18156 18.1032 3.29654C18.101 3.29654 18.0982 3.29708 18.0959 3.29708C18.0959 3.29708 18.0982 3.29594 18.1021 3.29314C18.2072 3.22237 19.6766 2.21443 19.8755 1.01346C19.8755 1.01346 19.0512 1.45684 17.897 1.84474C17.7059 1.9087 17.5059 1.97159 17.2997 2.02988C16.5557 1.22975 15.4982 0.730347 14.3244 0.730347C12.0728 0.730347 10.2482 2.56837 10.2482 4.83557C10.2482 5.15551 10.2848 5.46691 10.3539 5.76589C10.0392 5.75289 5.24773 5.48218 1.98807 1.50434C1.98807 1.50434 0.0399293 4.18438 3.14901 6.94025C3.14901 6.94025 2.2039 6.9023 1.38851 6.41136C1.38851 6.41136 1.08902 9.65817 4.60998 10.4883C4.60998 10.4883 3.91715 10.7528 2.81187 10.5642C2.81187 10.5642 3.42997 13.1876 6.55818 13.4328C6.55818 13.4328 4.08454 15.6846 0.57312 15.1563L0.574245 15.1565Z"
        />
      )
    case 'facebook':
      return (
        <path
          {...props}
          d="M22.6752 4.5727e-10H1.3152C0.965507 0.00253407 0.631 0.143229 0.384625 0.391403C0.138249 0.639577 -9.18108e-06 0.975098 4.57271e-10 1.3248V22.6848C0.00253407 23.0345 0.143229 23.369 0.391403 23.6154C0.639577 23.8618 0.975098 24 1.3248 24H12.8208V14.7192H9.7008V11.0856H12.8208V8.4144C12.8208 5.316 14.7144 3.6144 17.4792 3.6144C18.4124 3.61043 19.345 3.6585 20.2728 3.7584V7.008H18.3528C16.8528 7.008 16.5624 7.728 16.5624 8.772V11.0856H20.16L19.68 14.7192H16.56V24H22.6752C23.0266 24 23.3635 23.8604 23.612 23.612C23.8604 23.3635 24 23.0266 24 22.6752V1.3152C23.9975 0.965507 23.8568 0.631 23.6086 0.384625C23.3604 0.138249 23.0249 -9.18108e-06 22.6752 4.57271e-10V4.5727e-10Z"
        />
      )
    case 'instagram':
      return (
        <React.Fragment>
          <path
            {...props}
            d="M11.9995 2.16203C15.2037 2.16203 15.5829 2.17441 16.8485 2.23205C18.0183 2.2854 18.6538 2.48069 19.0767 2.64502C19.6369 2.8627 20.0365 3.12277 20.4566 3.54241C20.8768 3.96253 21.1368 4.36216 21.354 4.92232C21.5184 5.34529 21.7137 5.98071 21.767 7.15055C21.8246 8.41567 21.837 8.7953 21.837 11.9995C21.837 15.2037 21.8246 15.5829 21.767 16.8485C21.7137 18.0183 21.5184 18.6537 21.354 19.0767C21.1363 19.6369 20.8763 20.0365 20.4566 20.4566C20.0365 20.8767 19.6369 21.1368 19.0767 21.354C18.6538 21.5183 18.0183 21.7136 16.8485 21.767C15.5834 21.8246 15.2037 21.837 11.9995 21.837C8.7953 21.837 8.41567 21.8246 7.15056 21.767C5.98071 21.7136 5.34529 21.5183 4.92232 21.354C4.36216 21.1363 3.96253 20.8763 3.54241 20.4566C3.1223 20.0365 2.86222 19.6369 2.64502 19.0767C2.48069 18.6537 2.2854 18.0183 2.23205 16.8485C2.17441 15.5834 2.16203 15.2037 2.16203 11.9995C2.16203 8.7953 2.17441 8.41614 2.23205 7.15055C2.2854 5.98071 2.48069 5.34529 2.64502 4.92232C2.8627 4.36216 3.12277 3.96253 3.54241 3.54241C3.96253 3.12229 4.36216 2.86222 4.92232 2.64502C5.34529 2.48069 5.98071 2.2854 7.15056 2.23205C8.41615 2.17441 8.7953 2.16203 11.9995 2.16203ZM11.9995 0C8.74052 0 8.33184 0.0138134 7.05196 0.072401C5.77494 0.130512 4.90279 0.333426 4.13925 0.630175C3.34998 0.936926 2.68074 1.34704 2.01389 2.01437C1.34704 2.68122 0.936451 3.35045 0.630175 4.13924C0.333426 4.90279 0.130512 5.77493 0.0724011 7.05196C0.0138134 8.33183 0 8.74052 0 11.9995C0 15.2585 0.0138134 15.6672 0.0724011 16.9471C0.130512 18.2241 0.333426 19.0962 0.630175 19.8598C0.936927 20.6491 1.34704 21.3183 2.01437 21.9851C2.6817 22.6525 3.35045 23.0626 4.13972 23.3693C4.90279 23.6661 5.77541 23.869 7.05244 23.9271C8.33231 23.9857 8.741 23.9995 12 23.9995C15.259 23.9995 15.6677 23.9857 16.9476 23.9271C18.2246 23.869 19.0972 23.6661 19.8603 23.3693C20.6495 23.0626 21.3188 22.6525 21.9856 21.9851C22.653 21.3178 23.0631 20.6491 23.3698 19.8598C23.6666 19.0967 23.8695 18.2241 23.9276 16.9471C23.9862 15.6672 24 15.2585 24 11.9995C24 8.74052 23.9862 8.33183 23.9276 7.05196C23.8695 5.77493 23.6666 4.90231 23.3698 4.13924C23.0631 3.34998 22.653 2.68074 21.9856 2.01389C21.3183 1.34656 20.6495 0.93645 19.8603 0.629698C19.0963 0.333426 18.2241 0.130512 16.9471 0.072401C15.6672 0.0138134 15.2585 0 11.9995 0Z"
          />
          <path
            {...props}
            d="M11.9997 5.83777C8.5964 5.83777 5.83801 8.59663 5.83801 11.9995C5.83801 15.4023 8.59687 18.1612 11.9997 18.1612C15.4026 18.1612 18.1614 15.4023 18.1614 11.9995C18.1614 8.59663 15.4031 5.83777 11.9997 5.83777ZM11.9997 15.9992C9.79054 15.9992 8.00004 14.2082 8.00004 11.9995C8.00004 9.7903 9.79102 7.9998 11.9997 7.9998C14.2084 7.9998 15.9994 9.79077 15.9994 11.9995C15.9994 14.2087 14.2089 15.9992 11.9997 15.9992Z"
          />
          <path
            {...props}
            d="M18.4044 7.0339C19.1996 7.0339 19.8443 6.38922 19.8443 5.59397C19.8443 4.79873 19.1996 4.15405 18.4044 4.15405C17.6092 4.15405 16.9645 4.79873 16.9645 5.59397C16.9645 6.38922 17.6092 7.0339 18.4044 7.0339Z"
          />
        </React.Fragment>
      )
    case 'linkedin':
      return (
        <React.Fragment>
          <path
            {...props}
            d="M2.35033 0.0982673C3.58623 0.0992738 4.60554 1.12006 4.60288 2.36212C4.59992 3.66268 3.52063 4.64291 2.33511 4.61467C1.13267 4.63901 0.0759351 3.63468 0.0761719 2.35354C0.0761719 1.111 1.09945 0.0973199 2.35033 0.0982673Z"
          />
          <path
            {...props}
            d="M3.66278 18.883H1.01482C0.671164 18.883 0.392578 18.6044 0.392578 18.2607V6.96441C0.392578 6.62075 0.671164 6.34216 1.01482 6.34216H3.66278C4.00643 6.34216 4.28502 6.62075 4.28502 6.96441V18.2608C4.28496 18.6044 4.00643 18.883 3.66278 18.883Z"
          />
          <path
            {...props}
            d="M18.9082 10.31C18.9082 7.94182 16.9884 6.02197 14.6202 6.02197H13.9411C12.6454 6.02197 11.5008 6.66843 10.8123 7.65654C10.7372 7.76424 10.6677 7.87609 10.6038 7.99155C10.5818 7.98824 10.5687 7.98652 10.5684 7.98711V6.60052C10.5684 6.45788 10.4527 6.34218 10.31 6.34218H7.00638C6.86374 6.34218 6.74805 6.45782 6.74805 6.60052V18.6248C6.74805 18.7675 6.86363 18.8831 7.00626 18.8832L10.3819 18.884C10.5246 18.884 10.6403 18.7683 10.6403 18.6256V11.6789C10.6403 10.4781 11.598 9.48105 12.7988 9.46749C13.4117 9.46057 13.9674 9.70617 14.3679 10.1069C14.7631 10.5019 15.0075 11.0481 15.0075 11.6511V18.6265C15.0075 18.7692 15.1231 18.8848 15.2657 18.8849L18.6497 18.8857C18.7924 18.8858 18.9081 18.7701 18.9081 18.6274V10.31H18.9082Z"
          />
        </React.Fragment>
      )
    default:
      return <path />
  }
}

const SVGIcon = ({
  name = '',
  style = {},
  fill = '#000',
  viewBox = '',
  width = '100%',
  className = '',
  height = '100%',
  link = '',
}) => (
  <a href={link} target="_blank">
    <svg
      width={width}
      style={style}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || getViewBox(name)}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {getPath(name, { fill })}
    </svg>
  </a>
)

export default SVGIcon