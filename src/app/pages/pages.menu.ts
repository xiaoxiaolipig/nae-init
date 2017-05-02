export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'dashboard',
            icon: 'ion-stats-bars',
            selected: true,
            expanded: true,
            order: 0
          }
        }
      },
      {
        path: 'manage-device',
        data: {
          menu: {
            title: 'manage-device',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'device-explorer',
            data: {
              menu: {
                title: 'device-explorer',
                icon: 'ion-grid'
              }
            }
          },
          {
            path: 'device-registration',
            data: {
              menu: {
                title: 'device-registration',
                icon: 'ion-card'
              }
            }
          },
          {
            path: 'device-batch-control',
            data: {
              menu: {
                title: 'device-batch-control',
                icon: 'ion-android-options'
              }
            }
          }
        ]
      },
      {
        path: 'asset',
        data: {
          menu: {
            title: 'asset',
            icon: 'ion-ios-grid-view-outline'
          }
        },
        children: [
          {
            path: 'asset-explorer',
            data: {
              menu: {
                title: 'asset-explorer',
                icon: 'ion-ios-grid-view-outline',
                expanded: false
              }
            }
          },
          {
            path: 'asset-template',
            data: {
              menu: {
                title: 'asset-template',
                icon: 'ion-document'
              }
            }
          }
        ]
      },
      {
        path: 'manage-group',
        data: {
          menu: {
            title: 'manage-group',
            icon: 'ion-navicon-round'
          }
        }
      },
      {
        path: 'manage-rule',
        data: {
          menu: {
            title: 'manage-rule',
            icon: 'ion-shuffle',
            selected: false,
            expanded: false,
            order: 400,
          }
        }
      },
      {
        path: 'manage-alarm',
        data: {
          menu: {
            title: 'manage-alarm',
            icon: 'ion-alert',
            selected: false,
            expanded: false,
            order: 300,
          }
        }
      },
      {
        path: 'manage-diagnosis',
        data: {
          menu: {
            title: 'manage-diagnosis',
            icon: 'ion-ios-pulse-strong',
            selected: false,
            expanded: false,
            order: 500,
          }
        }
      },
      {
        path: 'manage-upgrade',
        data: {
          menu: {
            title: 'manage-upgrade',
            icon: 'ion-arrow-up-a',
            selected: false,
            expanded: false,
            order: 500,
          }
        }
      },
      {
        path: 'repository',
        data: {
          menu: {
            title: 'repository',
            icon: 'ion-upload',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'firmware-explorer',
            data: {
              menu: {
                title: 'firmware-explorer',
                icon: 'ion-usb'
              }
            }
          },
          {
            path: 'software-explorer',
            data: {
              menu: {
                title: 'software-explorer',
                icon: 'ion-code'
              }
            }
          }
        ]
      },
      {
        path: 'manage-user',
        data: {
          menu: {
            title: 'manage-user',
            icon: 'ion-person-add',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'user-explorer',
            data: {
              menu: {
                title: 'user-explorer',
                icon: 'ion-person'
              }
            }
          },
          {
            path: 'role-management',
            data: {
              menu: {
                title: 'role-management',
                icon: 'ion-card'
              }
            }
          },
          {
            path: 'device-access-control',
            data: {
              menu: {
                title: 'device-access-control',
                icon: 'ion-key'
              }
            },
            children: [
              {
                path: 'request-access',
                data: {
                  menu: {
                    title: 'request-access',
                    icon: 'ion-eye'
                  }
                }
              },
              {
                path: 'granting-access',
                data: {
                  menu: {
                    title: 'granting-access',
                    icon: 'ion-eye-disabled',
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: 'help',
        data: {
          menu: {
            title: 'help',
            icon: 'ion-help',
            selected: false,
            expanded: false,
            order: 500,
          }
        }
      },
    ]
  }
];
