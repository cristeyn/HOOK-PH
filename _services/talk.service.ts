import { Injectable } from '@angular/core';
import Talk from 'talkjs';

@Injectable({ providedIn: 'root' })
export class TalkService {
    private currentUser?: Talk.User;

    async createUser(applicationUser: any) {
      await Talk.ready;
      return new Talk.User({
        id: applicationUser.id,
        name: applicationUser.username,
        photoUrl: applicationUser.photoUrl,
        role: applicationUser.role
      });
    }

    async createCurrentSession(ID: string, username: string, email: string, photoUrl: string ) {
      await Talk.ready;
      const user = {
        id: ID,
        username: username,
        email: email,
        photoUrl: photoUrl,
        welcomeMessage: '',
        role: 'default'
      };
      this.currentUser = await this.createUser(user);
      const session = new Talk.Session({
           appId: 'tN55uv2z',
           me: this.currentUser
      });
      return session;
    }

    private async getOrCreateConversation(session: Talk.Session, otherApplicationUser: any) {
      const otherUser = await this.createUser(otherApplicationUser);
      const conversation = session.getOrCreateConversation(Talk.oneOnOneId(<Talk.User>this.currentUser, otherUser));
      conversation.setParticipant(<Talk.User>this.currentUser);
      conversation.setParticipant(otherUser);
      return conversation;
    }

    async createInbox(session: Talk.Session) {
      const otherApplicationUser = {
        id: 5,
        username: 'Hook PH Delivery',
        email: 'care.hook.ph@gmail.com',
        photoUrl: 'assets/hook-ph.png',
        welcomeMessage: 'Welcome to Hook PH Delivery Customer Service Chat, how can we help you?',
        role: 'default'
      };
  
      const conversation = await this.getOrCreateConversation(session, otherApplicationUser);
      return session.createInbox({selected: conversation});
   }
   appConversation?: Talk.ConversationBuilder;

   
   public get Conversation() : Talk.ConversationBuilder {
     return <Talk.ConversationBuilder>this.appConversation;
   }
   
   async createChatBox(session: Talk.Session) {
    const otherApplicationUser = {
      id: 5,
      username: 'Hook PH Delivery',
      email: 'care.hook.ph@gmail.com',
      photoUrl: 'assets/hook-ph.png',
      welcomeMessage: 'Welcome to Hook PH Delivery Customer Service Chat, how can we help you?',
      role: 'default'
    };

    const conversation = await this.getOrCreateConversation(session, otherApplicationUser);
    this.appConversation = conversation;
    return session.createChatbox();
 }


  }