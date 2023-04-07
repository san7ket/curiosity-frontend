import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  CLEAR_NOTIFICATIONS
} from '@redhat-cloud-services/frontend-components-notifications';

/**
 * @memberof Types
 * @module PlatformTypes
 */

const PLATFORM_ADD_NOTIFICATION = ADD_NOTIFICATION;
const PLATFORM_REMOVE_NOTIFICATION = REMOVE_NOTIFICATION;
const PLATFORM_CLEAR_NOTIFICATIONS = CLEAR_NOTIFICATIONS;
const PLATFORM_GLOBAL_FILTER_HIDE = 'PLATFORM_GLOBAL_FILTER_HIDE';
const PLATFORM_USER_AUTH = 'PLATFORM_USER_AUTH';

/**
 * Platform action, reducer types.
 *
 * @type {{PLATFORM_USER_AUTH: string, PLATFORM_GLOBAL_FILTER_HIDE: string, PLATFORM_CLEAR_NOTIFICATIONS: string,
 *     PLATFORM_ADD_NOTIFICATION: string, PLATFORM_REMOVE_NOTIFICATION: string}}
 */
const platformTypes = {
  PLATFORM_ADD_NOTIFICATION,
  PLATFORM_REMOVE_NOTIFICATION,
  PLATFORM_CLEAR_NOTIFICATIONS,
  PLATFORM_GLOBAL_FILTER_HIDE,
  PLATFORM_USER_AUTH
};

export {
  platformTypes as default,
  platformTypes,
  PLATFORM_ADD_NOTIFICATION,
  PLATFORM_REMOVE_NOTIFICATION,
  PLATFORM_CLEAR_NOTIFICATIONS,
  PLATFORM_GLOBAL_FILTER_HIDE,
  PLATFORM_USER_AUTH
};
