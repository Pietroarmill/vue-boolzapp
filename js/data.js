const app = new Vue(
    {
        el: "#root",
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novit???',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            currentContact: 0,
            userMessageSent: '',
            searchContact: '',
            arrowClicked: false,
            currentMainArrow: null,
            counter: 0,

        },
        methods: {
            showChat(i) {
                this.currentContact = i;
            },
            addMessageSent() {

                if (this.userMessageSent !== '') {

                    let counter = 2;

                    const time = setInterval(() => {
                        counter--;
                        console.log("tra", counter, 'secondi ti rispondero');

                        if (counter <= 0) {

                            this.contacts[this.currentContact].messages.push(
                                {
                                    date: this.newDate(),
                                    message: 'ok!!',
                                    status: 'received'
                                }
                            )
                            clearInterval(time)

                        }

                    }, 1000);

                    this.contacts[this.currentContact].messages.push(
                        {
                            date: this.newDate(),
                            message: this.userMessageSent,
                            status: 'sent'
                        }
                    )
                    this.userMessageSent = '';
                }
            },
            search() {
                console.log(this.searchContact);

                for (let i = 0; i < this.contacts.length; i++ ) {
                    let contact = this.contacts[i];
                    // console.log(currentContact);

                    if (contact.name.substr(0, contact.name.length).toLowerCase().includes(this.searchContact)) {
                        contact.visible = true;
                    } else if(this.searchContact === "") {
                        contact.visible = true
                    } else {
                        contact.visible = false;
                    }
                }

            },
            newDate() {

                let data = new Date();
                let Dd, Mm, Yy, h, m, s;
                
                Dd = data.getDate() + '/';
                Mm = '0' + data.getMonth() + '/';
                Yy = data.getFullYear() + ' ';
                h = data.getHours() + ':';
                m = data.getMinutes() + ":";
                s = data.getSeconds() + "";
                console.log(Dd+Mm+Yy+h+m+s);
            
                return Dd+Mm+Yy+h+m+s;
            },
            showMainArrow(i) {

                this.arrowClicked = !this.arrowClicked;

                if (this.arrowClicked === true) {
                    this.currentMainArrow = i;
                } else {
                    this.currentMainArrow = null;
                }
                
            },
            deleteMessage(i) {
                
                // console.log(this.contacts[this.currentContact].messages)
                this.contacts[this.currentContact].messages.splice(i, 1);
                this.currentMainArrow = null;
                console.log(this.counter, "log");

            }
        },
        computed: {
            message() {
                return this.contacts[this.currentContact].messages;
            }
        },
        mounted() {
        }
    }
)

