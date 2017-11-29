import {Component, ViewChild} from '@angular/core';

import {Platform, MenuController, Nav, ActionSheetController} from 'ionic-angular';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    // make HelloIonicPage the root (or first) page
    rootPage = HelloIonicPage;
    pages: Array<{title: string, component: any}>;
    actionSheet: {};

    constructor(public platform: Platform,
                public menu: MenuController,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                public actionSheetCtrl: ActionSheetController) {
        // Show Splash Screen
        splashScreen.show();
        this.initializeApp();

        // set our app's pages
        this.pages = [
            {title: 'Hello Ionic Tutorial', component: HelloIonicPage},
            {title: 'My First List', component: ListPage}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    }

    presentActionSheet() {
        this.menu.close();
        this.actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: () => {
                        console.log('Delete clicked.');
                    }
                }, {
                    text: 'Share',
                    handler: () => {
                        console.log('Share clicked');
                    }
                }, {
                    text: 'Play',
                    handler: () => {
                        console.log('Play clicked');
                    }
                }, {
                    text: 'Favorite',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.actionSheet.present();

    }
}
