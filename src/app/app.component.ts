import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home',
      url: '/folder',
      icon: 'home' 
    },
    { title: 'Cadastros',
      url: '/select-cad',
      icon: 'person' 
    },
    { title: 'Relatórios',
      url: '/folder/relatorios',
      icon: 'heart' 
    },
    { title: 'Financeiro',
      url: '/folder/financeiro',
      icon: 'briefcase' 
    },
    { title: 'Eventos',
      url: '/folder/eventos',
      icon: 'calendar' 
    },
    { title: 'Chat',
      url: '/folder/chat',
      icon: 'mail' 
    },
    { title: 'Sair',
      url: '/login',
      icon: 'arrow-undo' 
    },
  ];
  public labels = ['Family', 'Friends', 'Notes'];
  constructor() {}
}
