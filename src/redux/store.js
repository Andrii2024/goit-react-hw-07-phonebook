import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from './phonebook/contactsSlice';
// import filterReducer from './phonebook/filtersSlice';
import contactsReducer from './phonebook/contactsSlice';
import filtersReducer from './phonebook/filtersSlice';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

// const persistConfigFilter = {
//   key: 'filter',
//   version: 1,
//   storage,
// };
// const persistedReducerFilter = persistReducer(
//   persistConfigFilter,
//   filterReducer
// );

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  // devTools: process.env.NODE_ENV !== 'production',
});
// export let persistor = persistStore(store);
