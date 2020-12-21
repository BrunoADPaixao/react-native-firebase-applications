import React from 'react';
import { Auth } from './services';

export const SignUpUser = (email, password) => {
  return new Promise(function(resolve, reject) {
    Auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        resolve('Sign Up Successfully!');
      })
      .catch(error => {
        reject(error);
      });
  });
}

export const SignInUser = (email, password) => {
  return new Promise(function(resolve, reject) {
    Auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve('Sign In Successfully!');
      })
      .catch(error => {
        reject(error);
      });
  });
}

export const SignOutUser = () => {
  return new Promise(function(resolve, reject) {
    Auth().signOut()
      .then(() => {
        resolve('Sign Out Successfully!');
      })
      .catch(error => {
        reject(error);
      });
  });
}