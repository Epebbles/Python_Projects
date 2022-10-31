import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, {useRef, useState} from 'react';
import SegmentedPicker from 'react-native-segmented-picker';
import GenderList from './OptionLists/GenderList';
import DobList from './OptionLists/DobList';
import MaritalStatusList from './OptionLists/MaritalStatusList';
import EducationList from './OptionLists/EducationList';
import SearchPopUp from './SearchPopUp';
import CharityPopUp from './CharityPopUp';

const RegisterForm = ({type, initialProfilePic, initialFName, initialLName, initialZipCode, initialGender, initialAge, initialMaritalStatus, initialEducation, initialFavAnimal, initialFavFood, initialCharity}) => {
    const [profilePic, setProfilePic] = useState(initialProfilePic)
    const [fName, setFName] = useState(initialFName)
    const [lName, setLName] = useState(initialLName)
    const [zipCode, setZipCode] = useState(initialZipCode)
    const [gender, setGender] = useState(initialGender)
    const [age, setAge] = useState(initialAge)
    const [maritalStatus, setMaritalStatus] = useState(initialMaritalStatus)
    const [education, setEducation] = useState(initialEducation)
    const [favAnimal, setFavAnimal] = useState(initialFavAnimal)
    const [favFood, setFavFood] = useState(initialFavFood)
    const [charity, setCharity] = useState(initialCharity)
    
    const genderRef = useRef(null);
    const dobRef = useRef(null);
    const msRef = useRef(null);
    const edRef = useRef(null);

    const [genderVisible, setGenderVisible] = useState(false);
    const [dobVisible, setDobVisible] = useState(false);
    const [msVisible, setMSVisible] = useState(false);
    const [edVisible, setEDVisible] = useState(false);
    const [favAnimalVisible, setFavAnimalVisible] = useState(false);
    const [favFoodVisible, setFavFoodVisible] = useState(false);
    const [charityVisible, setCharityVisible] = useState(false);

    
    const handleSelection = (inputField, text) => {
        inputField === "FavAnimal"?
            setFavAnimal(text) + setFavAnimalVisible(false):
        inputField === "FavFood"?
            setFavFood(text) + setFavFoodVisible(false):
            setCharity(text) + setCharityVisible(false)
    }

    return (
        <View style={styles.container}>
            {type === "New"? <Text style={styles.statement}>Only your initials will be shared with others</Text>:""}
            <View style={styles.name}>
                <View style={styles.nameL}>
                    {fName.length === 0 && lName.length === 0 && profilePic.length === 0?
                        <Image style={styles.proImg} source={require('../../assets/iosAppLogo.png')}/>:
                        fName.length > 0 || lName.length > 0?
                            <Text style={styles.initials}>{fName[0]}{lName[0]}</Text>:
                            <Text>{profilePic}</Text>
                    }
                </View>
                <View style={styles.nameR}>
                    <View style={styles.nameRow}>
                        <Text style={type === "New"? styles.label: styles.editLabel}>First Name{type === "New"? "*": ""}</Text>
                        <TextInput style={styles.nameInput} textAlign='center' maxLength={14} placeholder='First' onChangeText={(e) => setFName(e)} value={fName}/>
                    </View>
                    <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginLeft: 12}}/>
                    <View style={styles.nameRow}>
                        <Text style={type === "New"? styles.label: styles.editLabel}>Last Name{type === "New"? "*": ""}</Text>
                        <TextInput style={styles.nameInput} textAlign='center' maxLength={14} placeholder='Last' onChangeText={(e) => setLName(e)} value={lName}/>
                    </View>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.4}>
                <Text style={styles.upload}>{profilePic === ""? "Add": "Edit"} Photo</Text>
            </TouchableOpacity>
            <Text style={styles.statement}>We won't share your information</Text>
            <View style={styles.hr}/>
            <View style={styles.hr}/>
            <View style={styles.details}>
                <View style={styles.row}>
                    <Text style={styles.label}>ZIP Code{type === "New"? "*": ""}</Text>
                    <TextInput maxLength={5} keyboardType='number-pad' returnKeyType='done' numeric style={[styles.input, type === "New"? styles.zip: styles.editZip]} placeholder='Enter' onChangeText={(e) => setZipCode(e)} value={zipCode}/>
                </View>
                <View style={styles.hrI}/>
                <View style={styles.row}>
                    <Text style={styles.label}>Gender{type === "New"? "*": ""}</Text>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => setGenderVisible(true)}>
                        {gender === ""?
                            <Text style={[styles.input, type === "New"? styles.gender: styles.editGender, styles.placeholder]}>Select</Text>:
                            <Text style={[styles.input, type === "New"? styles.gender: styles.editGender]}>{gender.gender}</Text>
                        }
                    </TouchableOpacity>
                    <SegmentedPicker
                        size={0.35} 
                        ref={genderRef}
                        visible={genderVisible}
                        onConfirm={(e) => setGender(e) + setGenderVisible(false)}
                        options={GenderList}
                    />
                </View>
                <View style={styles.hrI}/>
                <View style={styles.row}>
                    <Text style={styles.label}>Date of Birth{type === "New"? "*": ""}</Text>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => setDobVisible(true)}>
                        {age === ""?
                            <Text style={[styles.input, type === "New"? styles.dob: styles.editDob, styles.placeholder]}>Month Day, Year</Text>:
                            <Text style={[styles.input, type === "New"? styles.dob: styles.editDob]}>{age.month} {age.day}, {age.year}</Text>
                        }
                    </TouchableOpacity>
                    <SegmentedPicker
                        size={0.35}
                        ref={dobRef}
                        visible={dobVisible}
                        onConfirm={(e) => setAge(e) + setDobVisible(false)}
                        options={DobList}
                    />
                </View>
                <View style={styles.hrI}/>
                <View style={styles.row}>
                    <Text style={styles.label}>Marital Status{type === "New"? "*": ""}</Text>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => setMSVisible(true)}>
                        {maritalStatus === ""?
                            <Text style={[styles.input, type === "New"? styles.maritalStatus: styles.editMaritalStatus, styles.placeholder]}>Select</Text>:
                            <Text style={[styles.input, type === "New"? styles.maritalStatus: styles.editMaritalStatus]}>{maritalStatus.maritalStatus}</Text>
                        }
                    </TouchableOpacity>
                    <SegmentedPicker 
                        size={0.35}
                        ref={msRef}
                        visible={msVisible}
                        onConfirm={(e) => setMaritalStatus(e) + setMSVisible(false)}
                        options={MaritalStatusList}
                    />
                </View>
                <View style={styles.hrI}/>
                <View style={styles.row}>
                    <Text style={styles.label}>Education{type === "New"? "*": ""}</Text>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => setEDVisible(true)}>
                        {education === ""?
                            <Text style={[styles.input, type === "New"? styles.education: styles.editEducation, styles.placeholder]}>Select</Text>:
                            <Text style={[styles.input, type === "New"? styles.education: styles.editEducation]}>{education.education}</Text>
                        }
                    </TouchableOpacity>
                    <SegmentedPicker 
                        size={0.35}
                        ref={edRef}
                        visible={edVisible}
                        onConfirm={(e) => setEducation(e) + setEDVisible(false)}
                        options={EducationList}
                    />
                </View>
                <View style={styles.hrI}/>
                <View style={styles.row}>
                    <Text style={styles.label}>FavAnimal</Text>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => setFavAnimalVisible(true)}>
                        {favAnimal === ""?
                            <Text style={[styles.input, styles.animal, styles.placeholder]}>FavAnimal</Text>:
                            <Text style={[styles.input, styles.animal]}>{favAnimal}</Text>
                        }
                    </TouchableOpacity>
                    <SearchPopUp visible={favAnimalVisible} type="FavAnimal" currentInput={favAnimal} confirmed={handleSelection} cancel={() => setFavAnimalVisible(false)}/>
                </View>
                <View style={styles.hrI}/>
                <View style={styles.row}>
                    <Text style={styles.label}>FavFood</Text>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => setFavFoodVisible(true)}>
                        {favFood === ""?
                            <Text style={[styles.input, styles.food, styles.placeholder]}>FavFood</Text>:
                            <Text style={[styles.input, styles.food]}>{favFood}</Text>
                        }
                    </TouchableOpacity>
                    <SearchPopUp visible={favFoodVisible} type="FavFood" currentInput={favFood} confirmed={handleSelection} cancel={() => setFavFoodVisible(false)}/>
                </View>
                <View style={styles.hr}/>            
                <View style={styles.hr}/>
            </View>
            <View style={styles.charity}>
            <Text style={styles.statement}>When you win, so does your charity</Text>
            <View style={styles.hr}/>
            <View style={styles.hr}/>
                <View style={styles.row}>
                    <Text style={styles.label}>Charity{type === "New"? "*": ""}</Text>
                    <TouchableOpacity activeOpacity={0.4} style={styles.width} onPress={() => setCharityVisible(true)}>
                        {charity === ""?
                            <Text style={[styles.input, type === "New"? styles.charityText: styles.editCharityText, styles.placeholder]}>Select Charity</Text>:
                            <Text style={[styles.input, type === "New"? styles.charityText: styles.editCharityText]}>{charity}</Text>
                        }
                    </TouchableOpacity>
                    <CharityPopUp visible={charityVisible} currentSelection={charity} confirmed={handleSelection} cancel={() => setCharityVisible(false)}/>
                </View>
                <View style={styles.hr}/>
                <View style={styles.hr}/>
            </View>
        </View>
    )
}

export default RegisterForm

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    hr : {
        borderBottomColor: 'black', 
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    hrI : {
        borderBottomColor: 'black', 
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: 35,
        marginRight: 20
    },
    nameRow : {
        flexDirection: 'row',
        margin: 5,
        paddingLeft: 10,
    },
    row : {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 11,
        paddingLeft: 30,
    },
    width: {
        width: '70%'
    },
    label : {
        fontSize: 18,
        marginRight: 10
    },
    editLabel : {
        fontSize: 18,
        marginRight: 12
    },
    nameInput : {
        fontSize: 18,
        textAlign: 'center',
        width: '50%'
    },
    input : {
        fontSize: 18,
        textAlign: 'left'
    },
    placeholder : {
        color: '#c7c7c7'
    },
    statement :{
        fontSize: 12,
        color: 'gray',
        margin: 15,
        paddingLeft: 25
    },
    name : {
        flex: 0.2,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingLeft: 25
    },
    nameL : {
        flex: 1,
        borderRadius: '50%',
        borderWidth: 2,
        borderColor: '#f36b26',
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    proImg : {
        width: '100%',
        height: '100%'
    },
    initials : {
        fontSize: 35
    },
    nameR : {
        flex: 4,
        padding: 5
    },
    upload : {
        marginLeft: 30,
        fontSize: 13,
        color: '#0d90fc',
    },
    details : {
        flex: 1
    },
    zip : {
        marginLeft: 50
    },
    editZip : {
        marginLeft: 60
    },
    gender : {
        marginLeft: 65
    },
    editGender : {
        marginLeft: 74
    },
    dob : {
        marginLeft: 23
    },
    editDob : {
        marginLeft: 31
    },
    maritalStatus : {
        marginLeft: 13
    },
    editMaritalStatus : {
        marginLeft: 21
    },
    education : {
        marginLeft: 44
    },
    editEducation : {
        marginLeft: 51
    },
    animal : {
        marginLeft: 50
    },
    food : {
        marginLeft: 63
    },
    charity : {
        flex: 0.6
    },
    charityText : {
        marginLeft: 63
    },
    editCharityText : {
        marginLeft: 75
    },
});