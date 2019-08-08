/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Kilala Admin Dashboard',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  email: {
    id: `${scope}.chat`,
    defaultMessage: 'Email',
  },
  comment: {
    id: `${scope}.comment`,
    defaultMessage: 'Comment',
  },
});
