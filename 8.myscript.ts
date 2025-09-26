interface CseBranch{
    c_programming() : string
    python()      : string
    m1 ()           : number
}
interface EceBranch{
    digitalElectronics() : string
    communication_system ():string
}
interface MechanicalBranch{
    fluid_mechanics():string
    thermodynamics() :string
}
interface BTECHcourse extends CseBranch,EceBranch,MechanicalBranch{
}
class BTECHcourse implements CseBranch,EceBranch,MechanicalBranch
{
    c_programming() : string{
    return "c-language"
}
    python()      : any{
    console.log("python")
}

}