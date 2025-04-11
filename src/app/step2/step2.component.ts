import { Component, inject } from '@angular/core';
import { ConfiguratorService } from '../configurator.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2Component {

  service = inject(ConfiguratorService);

}
