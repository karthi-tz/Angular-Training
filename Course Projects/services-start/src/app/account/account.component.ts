import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers: [LoggingService]
})
export class AccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
  }

  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdate.emit(status);
    // this.loggingService.logStatusChanged(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
