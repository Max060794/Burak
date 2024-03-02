import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCore, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";

class MemberService {
    private readonly memberModel;
    constructor() {
        this.memberModel = MemberModel;
    }

    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel
        .findOne({ memberType: MemberType.RESTAURANT})
        .exec();
        console.log("exist:", exist);
        
        if(exist) throw new Errors (HttpCore.BAD_REQUEST, Message.CREATE_FAILED );
        
        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result;
        }catch (err) {
            throw new Errors (HttpCore.BAD_REQUEST, Message.CREATE_FAILED );
        }
        // const tempResult = new this.memberModel(input);
        // const result = await tempResult.save();
    }

}

export default MemberService;

