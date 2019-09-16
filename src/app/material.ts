import{ MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule ,MatGridListModule,
        MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatTableModule,MatMenuModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
              MatGridListModule,MatSidenavModule,MatToolbarModule,MatIconModule,
              MatListModule,MatTableModule,MatMenuModule],
    exports:[MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
              MatGridListModule,MatSidenavModule,MatToolbarModule,MatIconModule,
              MatListModule,MatTableModule,MatMenuModule]
})
export class MaterialModule{}