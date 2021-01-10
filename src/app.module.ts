import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule} from './users/user.module';
import {AuthenticationModule} from './authentication/authentication.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/dream2', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      },
    ),
    UserModule,
    AuthenticationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
