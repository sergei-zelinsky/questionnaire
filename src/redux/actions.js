import Types from './constants'

export default {
  addNameEmail: (name, email) => {
    return { type: Types.ADD_NAME_EMAIL, payload: { name, email } };
  },

  addLocation: (country, city) => {
    return { type: Types.ADD_LOCATION_DATA, payload: { country, city } };
  },

  addSocialNetworks: (networks) => {
    return { type: Types.ADD_SOCIAL_NETWORKS, payload: networks };
  },

  addCatImage: (image) => {
    return { type: Types.ADD_CAT_IMAGE, payload: image };
  }
}